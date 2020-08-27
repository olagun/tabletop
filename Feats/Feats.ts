import { PlayerCharacter } from '../Base/PlayerCharacter';
import {Trait} from '../Base/Interfaces';

export abstract class Feat {
    
    trait: Trait;  // Description of Feat inside of Trait list inside PC

    abstract apply(pc: PlayerCharacter, args?: object);

    abilityPrereqCheck(pc: PlayerCharacter, skill: string, target: number): boolean {
        return (pc.abilityScores[skill].score < target) ? false : true;
    }

    armorPrereqCheck(pc: PlayerCharacter, skill: string) {
        return (pc.traits.armorProficiencies.indexOf(skill) === -1) ? false : true;
    }

    spellcasterPrereqCheck(pc: PlayerCharacter) {
        return (!pc.isSpellcaster()) ? false : true;
    }
}