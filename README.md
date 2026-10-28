# Aero – Modpack

Create-Aeronautics-Modpack für **Minecraft 1.21.1, NeoForge 21.1.265**: Luftschiffe, Panzer und Kanonen auf Sable-Physik (Create Aeronautics, Create Big Cannons und viele Addons), dazu Xaero's Minimap/World Map, Distant Horizons und Sodium.

## Installieren mit automatischen Updates (empfohlen)

1. [Aero-Prism-Autoupdate.zip](https://github.com/Valli-2020/aero-modpack/releases/latest/download/Aero-Prism-Autoupdate.zip) laden.
2. Prism: *Instanz hinzufügen → Importieren* → die Zip wählen.
3. Instanz starten. Vor jedem Start prüft [packwiz-installer](https://github.com/packwiz/packwiz-installer), ob es eine neue Version gibt, und lädt nur die Änderungen. Der erste Start lädt alles (einige Minuten).
4. Einige Mods erlauben keinen Download durch Launcher. packwiz-installer zeigt dafür ein Fenster mit Links: Dateien von CurseForge laden und in den `mods`-Ordner der Instanz legen (Prism: Instanz → *Ordner* → `mods`), dann im Fenster weiter.

Schon eine Aero-Instanz? Unter *Instanz bearbeiten → Einstellungen → Eigene Befehle* als Pre-Launch-Befehl eintragen und `packwiz-installer-bootstrap.jar` (aus der Zip, Ordner `minecraft/`) in den `minecraft`-Ordner der Instanz legen:

```
"$INST_JAVA" -jar packwiz-installer-bootstrap.jar -s client https://raw.githubusercontent.com/Valli-2020/aero-modpack/main/pack/pack.toml
```

## Installieren ohne automatische Updates (.mrpack)

1. Neueste Version laden: [Aero.mrpack](https://github.com/Valli-2020/aero-modpack/releases/latest/download/Aero.mrpack) (alle Versionen unter [Releases](https://github.com/Valli-2020/aero-modpack/releases)).
2. Prism: *Instanz hinzufügen → Importieren* → die `.mrpack` wählen (oder den Link oben einfügen).
3. Prism fragt einmal, ob es Mods von CurseForge laden darf → bestätigen.
4. Einige Mods erlauben keinen Download durch Launcher. Die Liste steht bei jedem Release in `selbst-laden.txt`: von CurseForge laden und in den `mods`-Ordner der Instanz legen (Prism: Instanz → *Ordner* → `mods`).
5. Mindestens 8 GB RAM für die Instanz einstellen.

## Aktualisieren

Neue `.mrpack` laden und in Prism wieder importieren (neue Instanz) oder in der bestehenden Instanz *Modpack aktualisieren* wählen. Die Mods aus `selbst-laden.txt` danach erneut prüfen.

## Hinweis zu Bits 'n' Bobs

Die `.mrpack` enthält eine angepasste `bits_n_bobs-2.1.15-beta-aero.jar` ([Create: Bits 'n' Bobs](https://modrinth.com/mod/create-bits-n-bobs), MIT-Lizenz). Geändert: Der Mixin `dyeable.pipes.FluidPipeBlockTransitionMixin` ist aus der Mixin-Liste entfernt, weil er mit TFMG kollidiert. Folge: Gefärbte Rohre verlieren beim Umbau mit dem Schraubenschlüssel die Farbe.
