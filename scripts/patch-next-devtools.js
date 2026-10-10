const fs = require('fs');
const path = require('path');

const cjsContent = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE = 'NEXT_DEVTOOLS_SIMULATED_ERROR';
exports.SegmentBoundaryTriggerNode = function() { return null; };
exports.SegmentStateProvider = function(props) { return props ? props.children : null; };
exports.SegmentViewNode = function(props) { return props ? props.children : null; };
exports.SegmentViewStateNode = function() { return null; };
exports.useSegmentState = function() { return { boundaryType: null, setBoundaryType: function() {} }; };
`;

const esmContent = `export const SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE = 'NEXT_DEVTOOLS_SIMULATED_ERROR';
export function SegmentBoundaryTriggerNode() { return null; }
export function SegmentStateProvider(props) { return props ? props.children : null; }
export function SegmentViewNode(props) { return props ? props.children : null; }
export function SegmentViewStateNode() { return null; }
export function useSegmentState() { return { boundaryType: null, setBoundaryType: () => {} }; }
`;

const rootNodeModules = path.join(__dirname, '..', 'node_modules');

try {
  const cjsPath = path.join(rootNodeModules, 'next', 'dist', 'next-devtools', 'userspace', 'app', 'segment-explorer-node.js');
  const esmPath = path.join(rootNodeModules, 'next', 'dist', 'esm', 'next-devtools', 'userspace', 'app', 'segment-explorer-node.js');

  if (fs.existsSync(cjsPath)) {
    fs.writeFileSync(cjsPath, cjsContent, 'utf8');
    console.log('Successfully patched CJS segment-explorer-node.js');
  }
  if (fs.existsSync(esmPath)) {
    fs.writeFileSync(esmPath, esmContent, 'utf8');
    console.log('Successfully patched ESM segment-explorer-node.js');
  }

  // Recursive patch for Google font loader null safety
  function patchFontLoaders(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        patchFontLoaders(fullPath);
      } else if (entry.name.endsWith('.js')) {
        try {
          let code = fs.readFileSync(fullPath, 'utf8');
          if (code.includes('googleFontFileUrl') && code.includes('exec(googleFontFileUrl)[1]')) {
            code = code.replace(
              /const ext\s*=\s*[^;]*exec\(googleFontFileUrl\)\[1\];?/g,
              'const extMatch = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl); const ext = extMatch ? extMatch[1] : "woff2";'
            );
            fs.writeFileSync(fullPath, code, 'utf8');
            console.log(`Successfully patched Google font loader: ${fullPath}`);
          }
        } catch (_) {}
      }
    }
  }

  patchFontLoaders(path.join(rootNodeModules, 'next', 'dist', 'compiled', '@next', 'font'));
} catch (err) {
  console.error('Error in patch script:', err);
}
