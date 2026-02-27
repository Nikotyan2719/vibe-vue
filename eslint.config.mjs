// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: [
      '.nuxt',
      '.output',
      'node_modules',
      'dist',
      '*.min.*',
      '*.log',
      'coverage',
      '.DS_Store',
      '.env',
      '.env.*',
      '!.env.example',
      'public',
      'build/',
      '*.tmp'
    ]
  }
  // Your custom configs here
)
