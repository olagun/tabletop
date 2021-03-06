import { Race } from './Race';
import { PlayerCharacter } from '../Base/PlayerCharacter';
import * as traits from "../../Assets/RacialTraits.json";
import * as languages from "../../Assets/Languages.json";
import * as Spells from "../../Assets/Spells.json";
import { ISpell, Spell } from '../Base/Interfaces';

abstract class Gnome extends Race {
    constructor(name: string) {
        super(
            name,
            "425 years",  // Average Lifespan
            25,  // Speed (Movement)
            "Small", // Size
            [languages["Common"], languages["Gnomish"]],  // Languages
            [traits["Darkvision"], traits["Gnome Cunning"]],  // Racial Traits
            [],  // Weapon Proficiencies
            [],  // Armor Proficiencies
            []  // Tool Proficiences
        );
    }
}

export class ForestGnome extends Gnome {
    constructor() {
        super("Forest Gnome");
        this.traits.push(traits["Natural Illusionist"], traits["Speak With Small Beasts"]);
    }
    
    abilitiesAtLevels = {
        "1": this.level1
    }

    level1(pc: PlayerCharacter){ 
        const ispell: ISpell = Spells["MINOR ILLUSION"];
        const spell: Spell = {...ispell, spellcastingAbility: "Intelligence"};
        pc.spells["0"].push(spell);
    }

    abilityIncrease(pc: PlayerCharacter): void {
        pc.abilityScores.intelligence.update(2);
        pc.abilityScores.dexterity.update(1);
    }

    proficiencies(pc: PlayerCharacter): void {
        return;
    }
}

export class MountainGnome extends Gnome {
    constructor() {
        super("Mountain Gnome");
        this.traits.push(traits["Artificer's Lore"], traits["Tinker"]);
        this.toolProficiencies.push("Tinker's tools")
    }
 
    abilitiesAtLevels = {}

    abilityIncrease(pc: PlayerCharacter): void {
        pc.abilityScores.intelligence.update(2);
        pc.abilityScores.constitution.update(1);
    }

    proficiencies(pc: PlayerCharacter): void {
        return;
    }
}