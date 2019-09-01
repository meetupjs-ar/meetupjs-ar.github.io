workflow "packtracker.io" {
  on = "push"
  resolves = ["report webpack stats"]
}

action "report webpack stats" {
  uses = "packtracker/report@2.2.0"
  secrets = ["6520c5cc-d69d-4c49-9b1b-e66fbdcabc4f"]
}