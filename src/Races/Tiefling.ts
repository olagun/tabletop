import { Race } from './Race';
import { PlayerCharacter } from '../Base/PlayerCharacter';
import * as traits from "../../Assets/RacialTraits.json";
import * as languages from "../../Assets/Languages.json";
import * as Spells from "../../Assets/Spells.json";
import { ISpell, Spell } from '../Base/Interfaces';

export class Tiefling extends Race {
    constructor() {
        super(
            "Tiefling",
            "100 years",  // Average Lifespan
            30,  // Speed (Movement)
            "Medium", // Size
            [languages["Common"], languages["Infernal"]],  // Languages
            [traits["Darkvision"], traits["Hellish Resistance"], traits["Infernal Legacy"]],  // Racial Traits
            [],  // Weapon Proficiencies
            [],  // Armor Proficiencies
            []  // Tool Proficiences
        );
        // TODO: FIGURE OUT HOW TO REPRESENT SPELL LISTS IN BASECHARACTER - INFERNAL LEGACY SPELLS
    }

    
    abilitiesAtLevels = {
        "1": this.level1,
        "3": this.level3,
        "5": this.level5
    }
    
    
    level1(pc: PlayerCharacter) { 
        let ispell: ISpell = Spells["THAUMATURGY"];
        const spell = {...ispell, spellcastingAbility: "Charisma"};
        pc.spells["0"].push(spell);
    }

    level3(pc: PlayerCharacter) { 
        let ispell: ISpell = Spells["DARKNESS"];
        const spell = {...ispell, spellcastingAbility: "Charisma"}
        pc.spells["1"].push(spell); 
}

    level5(pc: PlayerCharacter) { 
        let ispell: ISpell = Spells["DARKNESS"];
        const spell = {...ispell, spellcastingAbility: "Charisma"}
        pc.spells["2"].push(spell); 
    }

    abilityIncrease(pc: PlayerCharacter): void {
        pc.abilityScores.charisma.update(2);
        pc.abilityScores.intelligence.update(1);
    }

    proficiencies(pc: PlayerCharacter): void {
        return;
    }
}
