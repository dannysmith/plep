# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_plep_session',
  :secret      => '465900b3c2d0a87d3704e6d8e6f2193b59378ffe0e4044e1f0d3e179361866a945599d5ee6c2ff6364ace856bcd8fb207de47a5b4bfb11232023ce5a9af6cf3f'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
