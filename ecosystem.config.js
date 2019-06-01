module.exports = {
  apps: [
    {
      name: 'dokternet',

      // args: 'one two',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      cwd: './current',
      script: './node_modules/nuxt/bin/nuxt-start',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
