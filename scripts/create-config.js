#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const [
  target,
  envName = process.env.NODE_ENV || 'development'
] = process.argv.slice(2)

console.info('create', target, envName, 'config into', `config.${target}.js`)

const configNames = [
  'default',
  `default.${envName}`,
  target,
  `${target}.${envName}`
]

const config = configNames
  .map(configName => `${__dirname}/configs/${configName}.js`)
  .filter(configPath => fs.existsSync(configPath))
  .map(configPath => require(configPath))
  .reduce((acc, config) => Object.assign(acc, config), {})

fs.writeFileSync(
  `${__dirname}/../config.${target}.js`,
  'module.exports = ' + JSON.stringify(config, null, 2),
  'utf-8'
)
