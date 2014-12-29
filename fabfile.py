import json
from datetime import date
from fabric.api import *
from fabric.contrib.console import confirm

with open('.env.fab.json') as env_json:
    env_dict = json.load(env_json)

env.roledefs = env_dict['roledefs']

def copy_local():
	local('rm -rf server/public/assets')
	local('cp -r dist/assets server/public')
	local('cp dist/index.html server/resources/templates')

def build():
	local('cd front-end && ember build -e production --output-path ../dist')

@roles('production')
def copy_build():
	with cd('/home/forge/puppycam.microprojectspodcast.com/server'):
		run('rm -rf public/assets')
		put('dist/assets', 'public')
		put('dist/index.html', 'resources/templates')

def deploy():
	execute(build)
	execute(copy_local)
	execute(copy_build)
