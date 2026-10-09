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

const cjsPath = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'next-devtools', 'userspace', 'app', 'segment-explorer-node.js');
const esmPath = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'esm', 'next-devtools', 'userspace', 'app', 'segment-explorer-node.js');

try {
  if (fs.existsSync(cjsPath)) {
    fs.writeFileSync(cjsPath, cjsContent, 'utf8');
    console.log('Successfully patched CJS segment-explorer-node.js');
  }
  if (fs.existsSync(esmPath)) {
    fs.writeFileSync(esmPath, esmContent, 'utf8');
    console.log('Successfully patched ESM segment-explorer-node.js');
  }
  const fontLoaderPath = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'compiled', '@next', 'font', 'dist', 'google', 'loader.js');
  if (fs.existsSync(fontLoaderPath)) {
    let fontLoaderCode = fs.readFileSync(fontLoaderPath, 'utf8');
    if (fontLoaderCode.includes('const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];')) {
      fontLoaderCode = fontLoaderCode.replace(
        'const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];',
        'const extMatch = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl); const ext = extMatch ? extMatch[1] : "woff2";'
      );
      fs.writeFileSync(fontLoaderPath, fontLoaderCode, 'utf8');
      console.log('Successfully patched Google font loader.js');
    }
  }
} catch (err) {
  console.error('Error patching next-devtools:', err);
}
