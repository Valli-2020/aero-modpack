ServerEvents.recipes(event => {

    event.shaped(
            Item.of('minecraft:end_stone'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    A: 'quark:limestone',
                    B: 'minecraft:ice',
                    C: 'minecraft:crying_obsidian'
            }
    )
    event.shaped(
            Item.of('minecraft:heavy_core'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    A: 'minecraft:diamond_block',
                    C: 'minecraft:iron_block',
                    B: 'minecraft:gold_block'
            }
    )
    event.shaped(
            Item.of('quark:dragon_scale'),
            [
                    'ABA',
                    'CAC',
                    'ACA'
            ],
            {
                    A: 'minecraft:coal_block',
                    B: 'minecraft:raw_iron_block',
                    C: 'minecraft:amethyst_block'
            }
    )
    event.shaped(
            Item.of('minecraft:heart_of_the_sea'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    A: 'minecraft:diamond_block',
                    C: 'minecraft:nautilus_shell',
                    B: 'minecraft:tube_coral_block'
            }
    )
    event.shaped(
            Item.of('minecraft:nautilus_shell'),
            [
                    ' A ',
                    'AAA',
                    ' A '
            ],
            {
                    A: 'minecraft:tube_coral_block'
            }
    )
    event.shaped(
            Item.of('minecraft:trial_key'),
            [
                    'ABA',
                    ' C ',
                    ' CC'
            ],
            {
                    A: 'minecraft:honeycomb_block',
                    C: 'minecraft:copper_block',
                    B: 'minecraft:gold_block'
            }
    )
    event.shaped(
            Item.of('minecraft:ominous_bottle'),
            [
                    'ABA',
                    'ACA',
                    'CDC'
            ],
            {
                    C: 'minecraft:coal_block',
                    D: 'minecraft:slime_block',
                    B: 'minecraft:raw_iron_block',
                    A: 'minecraft:copper_block'
            }
    )
    event.shaped(
            Item.of('industrialforegoing:pink_slime'),
            [
                    ' A ',
                    'ABA',
                    ' A '
            ],
            {
                    B: 'minecraft:slime_block',
                    A: 'minecraft:amethyst_block'
            }
    )
    event.shaped(
            Item.of('minecraft:grass_block'),
            [
                    ' A ',
                    ' B ',
                    '   '
            ],
            {
                    B: 'minecraft:dirt',
                    A: 'minecraft:moss_carpet'
            }
    )
    event.shaped(
            Item.of('minecraft:experience_bottle'),
            [
                    ' A ',
                    'BCB',
                    ' B '
            ],
            {
                    A: 'minecraft:oak_log',
                    B: 'minecraft:glass',
                    C: 'minecraft:ender_eye'
            }
    )
    event.shaped(
            Item.of('minecraft:sculk'),
            [
                    ' A ',
                    'BCD',
                    ' E '
            ],
            {
                    A: 'quark:orange_blossom_sapling',
                    D: 'quark:yellow_blossom_sapling',
                    E: 'quark:lavender_blossom_sapling',
                    B: 'quark:blue_blossom_sapling',
                    C: 'minecraft:experience_bottle'
            }
    )
    event.shaped(
            Item.of('create:blaze_burner'),
            [
                    'A A',
                    'ABA',
                    'CDC'
            ],
            {
                    A: 'minecraft:fire_charge',
                    C: 'minecraft:coal_block',
                    D: 'minecraft:flint_and_steel',
                    B: 'create:empty_blaze_burner'
            }
    )
    event.shaped(
            Item.of('create:empty_blaze_burner'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    A: 'minecraft:coal_block',
                    B: 'minecraft:fire_charge',
                    C: 'minecraft:flint_and_steel'
            }
    )
    event.shaped(
            Item.of('create:blaze_burner'),
            [
                    'A A',
                    'BCB',
                    'BDB'
            ],
            {
                    A: 'minecraft:fire_charge',
                    B: 'minecraft:coal_block',
                    C: 'minecraft:flint_and_steel',
                    D: 'create:empty_blaze_burner'
            }
    )
    event.shaped(
            Item.of('create:empty_blaze_burner'),
            [
                    'A A',
                    'A A',
                    'ABA'
            ],
            {
                    A: 'minecraft:coal_block',
                    B: 'minecraft:flint_and_steel'
            }
    )
    event.shaped(
            Item.of('create:precision_mechanism'),
            [
                    'ABC',
                    'BAD',
                    'CDD'
            ],
            {
                    D: 'minecraft:iron_nugget',
                    A: 'create:large_cogwheel',
                    C: 'create:golden_sheet',
                    B: 'create:cogwheel'
            }
    )
    event.shaped(
            Item.of('create:brass_ingot', 12),
            [
                    '   ',
                    'ABC',
                    'DDD'
            ],
            {
                    B: 'minecraft:fire_charge',
                    A: 'create:zinc_ingot',
                    D: 'minecraft:coal',
                    C: 'minecraft:copper_ingot'
            }
    )
    event.shaped(
            Item.of('create:copper_sheet'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'minecraft:copper_ingot'
            }
    )
    event.shaped(
            Item.of('create:iron_sheet'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'minecraft:iron_ingot'
            }
    )
    event.shaped(
            Item.of('create:golden_sheet'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'minecraft:gold_ingot'
            }
    )
    event.shaped(
            Item.of('create:brass_sheet'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'create:brass_ingot'
            }
    )
    event.shaped(
            Item.of('create:zinc_ingot'),
            [
                    '   ',
                    'AB ',
                    'BC '
            ],
            {
                    B: 'minecraft:raw_iron',
                    C: 'minecraft:iron_nugget',
                    A: 'minecraft:lapis_lazuli'
            }
    )
    event.shaped(
            Item.of('create:iron_sheet'),
            [
                    ' A ',
                    ' B ',
                    '   '
            ],
            {
                    A: 'minecraft:iron_nugget',
                    B: 'minecraft:iron_ingot'
            }
    )
    event.shaped(
            Item.of('minecraft:iron_nugget', 9),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'create:iron_sheet'
            }
    )
    event.shaped(
            Item.of('mob_drops_recipes_end:end_essence_common', 9),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'mob_drops_recipes_end:end_essence_uncommon'
            }
    )
    event.shaped(
            Item.of('mob_drops_recipes_end:end_essence_uncommon', 8),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'mob_drops_recipes_end:end_essence_rare'
            }
    )
    event.shaped(
            Item.of('mob_drops_recipes_end:end_essence_rare', 4),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'mob_drops_recipes_end:end_essence_epic'
            }
    )
    event.shaped(
            Item.of('createpropulsion:auto_glue'),
            [
                    'AAA',
                    'AAA',
                    'AAA'
            ],
            {
                    A: 'simulated:honey_glue'
            }
    )
    event.shaped(
            Item.of('createpropulsion:assembler_stick'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    A: 'simulated:rope_coupling',
                    B: 'simulated:spring',
                    C: 'simulated:physics_assembler'
            }
    )
    event.shaped(
            Item.of('aeronautics:levitite'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'aeronautics:levitite_blend_bucket'
            }
    )
    event.shaped(
            Item.of('aeronautics:pearlescent_levitite'),
            [
                    ' A ',
                    ' B ',
                    ' C '
            ],
            {
                    C: 'aeronautics:levitite_blend_bucket',
                    B: 'minecraft:fire_charge',
                    A: 'aeronautics:levitite'
            }
    )
    event.shaped(
            Item.of('minecraft:light'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'minecraft:torch'
            }
    )
    event.shaped(
            Item.of('minecraft:turtle_scute', 9),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'minecraft:emerald'
            }
    )
    event.shaped(
            Item.of('minecraft:glow_ink_sac'),
            [
                    ' A ',
                    ' B ',
                    ' C '
            ],
            {
                    B: 'minecraft:ink_sac',
                    A: 'minecraft:lapis_lazuli',
                    C: 'minecraft:string'
            }
    )
    event.shaped(
            Item.of('create:andesite_casing'),
            [
                    ' A ',
                    ' B ',
                    '   '
            ],
            {
                    A: 'create:andesite_alloy',
                    B: 'minecraft:stripped_oak_log'
            }
    )
    event.shaped(
            Item.of('create:copper_casing'),
            [
                    '   ',
                    ' AB',
                    '   '
            ],
            {
                    A: 'minecraft:stripped_oak_log',
                    B: 'minecraft:copper_ingot'
            }
    )
    event.shaped(
            Item.of('create:brass_casing'),
            [
                    '   ',
                    'AB ',
                    '   '
            ],
            {
                    A: 'create:brass_ingot',
                    B: 'minecraft:stripped_oak_log'
            }
    )
    event.shaped(
            Item.of('create:railway_casing'),
            [
                    '   ',
                    'AB ',
                    '   '
            ],
            {
                    B: 'create:sturdy_sheet',
                    A: 'create:brass_casing'
            }
    )
    event.shaped(
            Item.of('create:zinc_ingot'),
            [
                    '   ',
                    'AB ',
                    'CA '
            ],
            {
                    C: 'minecraft:flint',
                    A: 'minecraft:iron_ingot',
                    B: 'minecraft:feather'
            }
    )
    event.shaped(
            Item.of('create:crushing_wheel', 2),
            [
                    'ABA',
                    'ACA',
                    'AAA'
            ],
            {
                    A: 'create:andesite_alloy',
                    C: 'create:large_water_wheel',
                    B: 'create:andesite_alloy_block'
            }
    )
    event.shaped(
            Item.of('offroad:monstrous_tire'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'create_lnl:monstrous_slime_tire'
            }
    )
    event.shaped(
            Item.of('offroad:large_tire'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'create_lnl:large_slime_tire'
            }
    )
    event.shaped(
            Item.of('offroad:tire'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'create_lnl:slime_tire'
            }
    )
    event.shaped(
            Item.of('offroad:small_tire'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'create_lnl:small_slime_tire'
            }
    )
    event.shaped(
            Item.of('simulated:engine_assembly'),
            [
                    ' A ',
                    'ABA',
                    'CCC'
            ],
            {
                    B: 'minecraft:iron_nugget',
                    C: 'minecraft:iron_ingot',
                    A: 'minecraft:paper'
            }
    )
    event.shaped(
            Item.of('simulated:gyroscopic_mechanism'),
            [
                    'ABC',
                    'ADE',
                    'FEE'
            ],
            {
                    B: 'create:electron_tube',
                    A: 'create:crafter_slot_cover',
                    C: 'create:brass_hand',
                    D: 'create:precision_mechanism',
                    F: 'create:brass_nugget',
                    E: 'create:crushed_raw_gold'
            }
    )
    event.shaped(
            Item.of('minecraft:dragon_egg'),
            [
                    'ABA',
                    'CDC',
                    'EFE'
            ],
            {
                    D: 'simulated:gyroscopic_mechanism',
                    B: 'create:electron_tube',
                    C: 'create:crafter_slot_cover',
                    E: 'create:brass_hand',
                    F: 'create:precision_mechanism',
                    A: 'minecraft:crying_obsidian'
            }
    )
    event.shaped(
            Item.of('minecraft:beacon'),
            [
                    'ABA',
                    'CDC',
                    'EEE'
            ],
            {
                    D: 'simulated:engine_assembly',
                    B: 'create:electron_tube',
                    C: 'create:brass_hand',
                    A: 'create:precision_mechanism',
                    E: 'minecraft:crying_obsidian'
            }
    )
    event.shaped(
            Item.of('minecraft:conduit'),
            [
                    'ABC',
                    'DED',
                    'FBG'
            ],
            {
                    A: 'offroad:small_tire',
                    B: 'create:electron_tube',
                    F: 'offroad:large_tire',
                    D: 'create:brass_hand',
                    G: 'offroad:monstrous_tire',
                    E: 'create:precision_mechanism',
                    C: 'offroad:tire'
            }
    )
    event.shaped(
            Item.of('minecraft:sniffer_egg'),
            [
                    'ABA',
                    'CDC',
                    'CEC'
            ],
            {
                    C: 'create:brass_ingot',
                    A: 'create:electron_tube',
                    E: 'create:crafter_slot_cover',
                    B: 'create:precision_mechanism',
                    D: 'create_mobile_packages:robo_bee'
            }
    )
    event.shaped(
            Item.of('createornithopterglider:elytra_piece'),
            [
                    'ABA',
                    'CBC',
                    'DBD'
            ],
            {
                    A: 'create:electron_tube',
                    C: 'create:crafter_slot_cover',
                    B: 'create:precision_mechanism',
                    D: 'create:crushed_raw_gold'
            }
    )
    event.shaped(
            Item.of('createornithopterglider:ornithopterglider'),
            [
                    'ABA',
                    'CDC',
                    'AEA'
            ],
            {
                    E: 'createornithopterglider:elytra_piece',
                    B: 'create:electron_tube',
                    C: 'create:brass_hand',
                    A: 'create:precision_mechanism',
                    D: 'create:crushed_raw_gold'
            }
    )
    event.shaped(
            Item.of('simulated:creative_physics_staff'),
            [
                    'ABA',
                    'CDE',
                    'FGF'
            ],
            {
                    G: 'rainbowcompound:overcharged_alloy',
                    A: 'rainbowcompound:refined_radiance_neon',
                    C: 'rainbowcompound:shadow_resonant_assembly',
                    F: 'rainbowcompound:rainbow_compound',
                    B: 'minecraft:dragon_egg',
                    D: 'rainbowcompound:obsidianite_upgrade_kit',
                    E: 'rainbowcompound:radiance_resonant_assembly'
            }
    )
    event.shaped(
            Item.of('mekanismcreative:transcendent_alloy'),
            [
                    'ABC',
                    'DBE',
                    'FBG'
            ],
            {
                    F: 'rainbowcompound:dynamic_elytra_ice',
                    G: 'rainbowcompound:dynamic_elytra_66ccff',
                    A: 'rainbowcompound:dynamic_elytra_slime',
                    B: 'create:precision_mechanism',
                    C: 'rainbowcompound:dynamic_elytra_fire',
                    D: 'rainbowcompound:dynamic_elytra_rainbow',
                    E: 'rainbowcompound:dynamic_elytra_feather'
            }
    )
    event.shaped(
            Item.of('mekanismcreative:quantum_control_circuit'),
            [
                    'ABA',
                    'CDE',
                    'DFD'
            ],
            {
                    B: 'create:electron_tube',
                    F: 'rainbowcompound:obsidianite_elytra',
                    E: 'rainbowcompound:dynamic_elytra_radiance',
                    A: 'create:brass_hand',
                    D: 'create:precision_mechanism',
                    C: 'rainbowcompound:dynamic_elytra_ender'
            }
    )
    event.shaped(
            Item.of('create:precision_mechanism', 16),
            [
                    'ABA',
                    'CDC',
                    'ABA'
            ],
            {
                    D: 'simulated:gyroscopic_mechanism',
                    A: 'create:brass_ingot',
                    C: 'create:electron_tube',
                    B: 'create:brass_hand'
            }
    )
    event.shaped(
            Item.of('mekanismcreative:transcendent_alloy', 6),
            [
                    'AAA',
                    'BCB',
                    'ADA'
            ],
            {
                    C: 'simulated:gyroscopic_mechanism',
                    A: 'create:electron_tube',
                    B: 'create:precision_mechanism',
                    D: 'mekanismcreative:quantum_control_circuit'
            }
    )
    event.shaped(
            Item.of('minecraft:ominous_trial_key'),
            [
                    'ABA',
                    'CBC',
                    'CDC'
            ],
            {
                    A: 'create:electron_tube',
                    B: 'minecraft:redstone',
                    C: 'create:crafter_slot_cover',
                    D: 'simulated:red_portable_engine'
            }
    )
    event.shaped(
            Item.of('minecraft:emerald'),
            [
                    'AAA',
                    'AAA',
                    'AAA'
            ],
            {
                    A: 'minecraft:turtle_scute'
            }
    )
    event.shaped(
            Item.of('minecraft:vex_armor_trim_smithing_template'),
            [
                    'ABA',
                    'ACA',
                    'AAA'
            ],
            {
                    C: 'minecraft:heart_of_the_sea',
                    A: 'minecraft:diamond',
                    B: 'minecraft:bone'
            }
    )
    event.shaped(
            Item.of('minecraft:sentry_armor_trim_smithing_template'),
            [
                    'ABA',
                    'ACA',
                    'AAA'
            ],
            {
                    C: 'minecraft:heart_of_the_sea',
                    B: 'minecraft:wheat',
                    A: 'minecraft:diamond'
            }
    )
    event.shaped(
            Item.of('minecraft:coast_armor_trim_smithing_template'),
            [
                    'ABA',
                    'ACA',
                    'AAA'
            ],
            {
                    B: 'minecraft:leather',
                    C: 'minecraft:heart_of_the_sea',
                    A: 'minecraft:diamond'
            }
    )
    event.shaped(
            Item.of('minecraft:host_armor_trim_smithing_template'),
            [
                    'ABA',
                    'BCB',
                    'BAB'
            ],
            {
                    B: 'minecraft:leather',
                    C: 'minecraft:heart_of_the_sea',
                    A: 'minecraft:diamond'
            }
    )
    event.shaped(
            Item.of('minecraft:wayfinder_armor_trim_smithing_template'),
            [
                    'ABA',
                    'ACA',
                    'BAB'
            ],
            {
                    A: 'minecraft:leather',
                    C: 'minecraft:heart_of_the_sea',
                    B: 'minecraft:diamond'
            }
    )
    event.shaped(
            Item.of('relics:phantom_boot'),
            [
                    'ABB',
                    'CBC',
                    'BCC'
            ],
            {
                    B: 'quark:charcoal_block',
                    C: 'minecraft:amethyst_block',
                    A: 'relics:phantom_block'
            }
    )
    event.shaped(
            Item.of('relics:phantom_block'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    B: 'quark:charcoal_block',
                    A: 'minecraft:amethyst_block',
                    C: 'minecraft:gold_block'
            }
    )
    event.shaped(
            Item.of('relics:researching_table'),
            [
                    'ABA',
                    'BBB',
                    'ABA'
            ],
            {
                    B: 'relics:phantom_block',
                    A: 'minecraft:gold_block'
            }
    )
    event.shaped(
            Item.of('minecraft:netherite_scrap'),
            [
                    'AAA',
                    'BAB',
                    'CDC'
            ],
            {
                    C: 'minecraft:nether_brick',
                    B: 'quark:charcoal_block',
                    A: 'minecraft:diamond',
                    D: 'quark:grate'
            }
    )
    event.shaped(
            Item.of('create:blaze_cake'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    A: 'minecraft:blaze_powder',
                    B: 'minecraft:blaze_rod',
                    C: 'minecraft:cake'
            }
    )
    event.shaped(
            Item.of('blazinghot:blaze_roll', 8),
            [
                    'AAA',
                    'ABA',
                    'AAA'
            ],
            {
                    A: 'create:sweet_roll',
                    B: 'create:blaze_cake'
            }
    )
    event.shaped(
            Item.of('minecraft:grass_block', 8),
            [
                    'AAA',
                    'ABA',
                    'AAA'
            ],
            {
                    A: 'minecraft:dirt',
                    B: 'minecraft:slime_ball'
            }
    )
    event.shaped(
            Item.of('aeronautics:music_disc_cloud_skipper'),
            [
                    'AAA',
                    'BCD',
                    'EFG'
            ],
            {
                    C: 'aeronautics:adjustable_burner',
                    E: 'minecraft:oak_log',
                    D: 'aeronautics:andesite_propeller',
                    G: 'create:red_seat',
                    A: 'aeronautics:white_envelope',
                    B: 'simulated:white_symmetric_sail',
                    F: 'minecraft:oak_planks'
            }
    )
    event.shaped(
            Item.of('aeronautics:mounted_potato_cannon'),
            [
                    ' A ',
                    'BCD',
                    'E  '
            ],
            {
                    D: 'create:fluid_pipe',
                    E: 'create:shaft',
                    A: 'minecraft:redstone',
                    B: 'create:copper_casing',
                    C: 'create:cogwheel'
            }
    )
    event.shaped(
            Item.of('create:cardboard', 8),
            [
                    'A A',
                    'AAA',
                    'AAA'
            ],
            {
                    A: 'minecraft:paper'
            }
    )
    event.shaped(
            Item.of('create:handheld_worldshaper'),
            [
                    'ABB',
                    'CDE',
                    'FGH'
            ],
            {
                    B: 'create:refined_radiance',
                    E: 'simulated:gyroscopic_mechanism',
                    F: 'create:chromatic_compound',
                    G: 'minecraft:paper',
                    C: 'create:creative_blaze_cake',
                    D: 'create:creative_motor',
                    H: 'createpropulsion:assembler_stick',
                    A: 'create:creative_crate'
            }
    )
    event.shaped(
            Item.of('create:creative_blaze_cake'),
            [
                    'ABA',
                    'CDC',
                    'ABA'
            ],
            {
                    C: 'create:refined_radiance',
                    A: 'create:blaze_burner',
                    D: 'create:blaze_cake',
                    B: 'create:shadow_steel'
            }
    )
    event.shaped(
            Item.of('minecraft:debug_stick'),
            [
                    'AAA',
                    'AAA',
                    'AAA'
            ],
            {
                    A: 'quark:stick_block'
            }
    )
    event.shaped(
            Item.of('artifacts:mimic_spawn_egg'),
            [
                    'ABC',
                    'D E',
                    'FGH'
            ],
            {
                    H: 'artifacts:power_glove',
                    F: 'artifacts:pocket_piston',
                    A: 'artifacts:everlasting_beef',
                    B: 'artifacts:umbrella',
                    E: 'artifacts:cloud_in_a_bottle',
                    D: 'artifacts:feral_claws',
                    G: 'iron_repair_kits:diamond_repair_kit',
                    C: 'artifacts:eternal_steak'
            }
    )
    event.shaped(
            Item.of('create_creative_assembly:dormantcorruptium'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'create_creative:creative_alloy'
            }
    )
    event.shaped(
            Item.of('toms_storage:crafting_terminal'),
            [
                    'ABC',
                    'DEF',
                    'GHG'
            ],
            {
                    G: 'create:copper_tiles',
                    F: 'create:copper_door',
                    D: 'create:framed_glass',
                    A: 'mob_drops_recipes_overworld:overworld_essence_epic',
                    E: 'create:red_seat',
                    H: 'create:waxed_copper_shingles',
                    C: 'mob_drops_recipes_end:end_essence_epic',
                    B: 'mob_drops_recipes_nether:nether_essence_epic'
            }
    )
    event.shaped(
            Item.of('minecraft:nether_wart', 4),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'minecraft:nether_wart_block'
            }
    )
    event.shaped(
            Item.of('createdieselgenerators:crude_oil_bucket'),
            [
                    'ABA',
                    'CDC',
                    'CCC'
            ],
            {
                    C: 'minecraft:coal_block',
                    D: 'minecraft:bucket',
                    A: 'minecraft:flint',
                    B: 'minecraft:charcoal'
            }
    )
    event.shaped(
            Item.of('minecraft:honeycomb'),
            [
                    ' A ',
                    'ABA',
                    ' A '
            ],
            {
                    B: 'minecraft:yellow_dye',
                    A: 'minecraft:gold_nugget'
            }
    )
    event.shaped(
            Item.of('minecraft:honeycomb', 4),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'minecraft:honeycomb_block'
            }
    )
    event.shaped(
            Item.of('minecraft:honeycomb_block', 64),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    C: 'minecraft:totem_of_undying',
                    B: 'minecraft:yellow_dye',
                    A: 'minecraft:gold_nugget'
            }
    )
    event.shaped(
            Item.of('easy_villagers:villager'),
            [
                    'AAA',
                    'B B',
                    'CDC'
            ],
            {
                    C: 'minecraft:oak_log',
                    A: 'minecraft:emerald',
                    B: 'minecraft:gold_nugget',
                    D: 'minecraft:composter'
            }
    )
    event.shaped(
            Item.of('create:shadow_steel', 6),
            [
                    'ABA',
                    'ACA',
                    'ADA'
            ],
            {
                    A: 'minecraft:coal_block',
                    B: 'minecraft:wither_skeleton_skull',
                    C: 'minecraft:diamond',
                    D: 'createdieselgenerators:crude_oil_bucket'
            }
    )
    event.shaped(
            Item.of('create:refined_radiance', 6),
            [
                    'ABA',
                    'ACA',
                    'ADA'
            ],
            {
                    A: 'minecraft:glowstone',
                    D: 'minecraft:gold_nugget',
                    B: 'create:shadow_steel',
                    C: 'minecraft:trial_key'
            }
    )
    event.shaped(
            Item.of('create:sturdy_sheet'),
            [
                    'ABA',
                    'CDC',
                    'CCC'
            ],
            {
                    C: 'minecraft:coal_block',
                    A: 'minecraft:lava_bucket',
                    B: 'create:shadow_steel',
                    D: 'create:powdered_obsidian'
            }
    )
    event.shaped(
            Item.of('mekanism:pellet_antimatter'),
            [
                    'ABA',
                    'CDC',
                    'EFE'
            ],
            {
                    D: 'minecraft:armadillo_scute',
                    B: 'create:haunted_bell',
                    C: 'create:creative_motor',
                    E: 'create:creative_blaze_cake',
                    A: 'create:creative_crate',
                    F: 'toms_storage:crafting_terminal'
            }
    )
    event.shaped(
            Item.of('create:schematic'),
            [
                    'AAA',
                    'BCD',
                    'EFG'
            ],
            {
                    D: 'create_simulated_additions:ckbgv_4_engine',
                    B: 'aeronautics:adjustable_burner',
                    F: 'create:andesite_casing',
                    C: 'create:empty_schematic',
                    E: 'create:item_vault',
                    G: 'minecraft:spruce_stairs',
                    A: 'aeronautics:white_envelope'
            }
    )
    event.shaped(
            Item.of('minecraft:honey_block'),
            [
                    ' A ',
                    'ABA',
                    ' A '
            ],
            {
                    A: 'minecraft:yellow_wool',
                    B: 'minecraft:honey_bottle'
            }
    )
    event.shaped(
            Item.of('minecraft:honey_bottle'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'minecraft:gold_nugget'
            }
    )
    event.shaped(
            Item.of('minecraft:honey_block'),
            [
                    '   ',
                    ' A ',
                    '   '
            ],
            {
                    A: 'minecraft:honeycomb_block'
            }
    )
    event.shaped(
            Item.of('minecraft:honey_bottle', 16),
            [
                    ' A ',
                    'A A',
                    ' A '
            ],
            {
                    A: 'minecraft:honeycomb'
            }
    )
    event.shaped(
            Item.of('hotstuff:redstone_levitite'),
            [
                    'AAA',
                    'ABA',
                    'AAA'
            ],
            {
                    A: 'minecraft:redstone',
                    B: 'aeronautics:levitite'
            }
    )
    event.shaped(
            Item.of('create_new_age:magnetite_block', 32),
            [
                    'AAA',
                    'ABA',
                    'AAA'
            ],
            {
                    A: 'advancedcrafting:graphite',
                    B: 'simulated:redstone_magnet'
            }
    )
    event.shaped(
            Item.of('mekanism:dust_diamond'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    B: 'minecraft:stick',
                    C: 'minecraft:lapis_lazuli',
                    A: 'minecraft:white_dye'
            }
    )
    event.shaped(
            Item.of('minecraft:lapis_lazuli'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    C: 'minecraft:raw_iron',
                    A: 'minecraft:coal',
                    B: 'minecraft:stick'
            }
    )
});
