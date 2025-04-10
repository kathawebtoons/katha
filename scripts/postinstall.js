import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  // Ensure the rollup binary is properly linked
  execSync('npm rebuild @rollup/rollup-linux-x64-gnu', { stdio: 'inherit' });
  
  // Create a symlink if needed
  const rollupPath = join(__dirname, '..', 'node_modules', '@rollup', 'rollup-linux-x64-gnu');
  const targetPath = join(__dirname, '..', 'node_modules', 'rollup', 'dist');
  
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }
  
  const binaryPath = join(rollupPath, 'rollup-linux-x64-gnu.node');
  const targetBinaryPath = join(targetPath, 'rollup-linux-x64-gnu.node');
  
  if (fs.existsSync(binaryPath) && !fs.existsSync(targetBinaryPath)) {
    fs.symlinkSync(binaryPath, targetBinaryPath);
  }
  
  console.log('Postinstall script completed successfully');
} catch (error) {
  console.error('Error in postinstall script:', error);
  process.exit(1);
} 