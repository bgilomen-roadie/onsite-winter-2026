# Puma configuration file

# Specifies the number of `workers` to boot in clustered mode.
# Set to 0 for development to avoid macOS fork() issues
workers ENV.fetch("WEB_CONCURRENCY") { 0 }

# Specifies the `port` that Puma will listen on to receive requests; default is 3001.
port ENV.fetch("PORT") { 3001 }

# Specifies the `environment` that Puma will run in.
environment ENV.fetch("RAILS_ENV") { "development" }

# Specifies the `pidfile` that Puma will use.
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

# Allow puma to be restarted by `bin/rails restart` command.
plugin :tmp_restart
