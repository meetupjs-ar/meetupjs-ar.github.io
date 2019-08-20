workflow "packtracker.io" {
  on = "push"
  resolves = ["report webpack stats"]
}

action "report webpack stats" {
  uses = "packtracker/report@2.2.0"
  secrets = ["8eae744b-e700-43e7-8c21-97464275e82f"]
}