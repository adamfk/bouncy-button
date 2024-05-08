# [0.4.6]
### Changed (minor)
- reduced blank lines at startup. Causes created files to look blank.
- add slight line printing animation to make easier on eyes.
    - slower at startup and in menus. None when printing results (too much text there).

# [0.3.4]
### Fixed
- Fix `skip_wait_for_stable`. It is now cleared after each use. This is more useful for its intended purpose of being used with constant signal generator input.
