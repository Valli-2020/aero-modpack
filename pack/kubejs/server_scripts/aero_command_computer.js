// [Aero] Survival-Rezept für den CC:Tweaked Command Computer (2026-10-26)
// Benutzen kann man ihn nur, wenn config/computercraft-server.toml es erlaubt (command_require_creative).
ServerEvents.recipes(event => {
  event.shaped('computercraft:computer_command', [
    'GRG',
    'RCR',
    'GNG'
  ], {
    G: 'minecraft:gold_block',
    R: 'minecraft:redstone_block',
    C: 'computercraft:computer_advanced',
    N: 'minecraft:nether_star'
  }).id('aero:command_computer')
})
