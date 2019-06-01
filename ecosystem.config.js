module.exports = {
  apps: [
    {
      name: 'prod',

      cwd: './current',
      script: './node_modules/.bin/nuxt',
      args: 'start',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
