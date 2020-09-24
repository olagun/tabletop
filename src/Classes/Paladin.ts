import { PlayerClass, LevelingParams, SpellSlotFactory } from './PlayerClass';
import { PlayerCharacter } from '../Base/PlayerCharacter';
import { ResourceTrait } from '../Base/Interfaces';
import * as SpellList from '../../Assets/SpellList.json';
import * as SpellCastingAbility from '../../Assets/SpellcastingAbility.json';
import { PaladinArchetype } from './Archetypes';

export class Paladin extends PlayerClass {

    constructor(skillProficiencies: string[], weapons: string[], armor: string[], params: LevelingParams, equipmentPack: string){ 
        super(
            "Paladin",
            [],
            skillProficiencies, 
            ["Simple", "Martial"],
            ["Light", "Medium", "Heavy", "Shield"],
            [],
            weapons,
            armor,
            [],
            [],
            params,
            "d10",
            10,
            ["wisdom", "charisma"]
        );

        this.equipmentPack = equipmentPack

        for(let level in this.abilitiesAtLevels) {
            const func: Function = this.abilitiesAtLevels[level];
            this.abilitiesAtLevels[level] = func.bind(this);
        }
    }

    /** TODO
     * FIGHTING STYLE LVL2
     */

	paladinOath: string;

    abilitiesAtLevels = {
        "1": this.level1,
        "2": this.level2,
        "3": this.level3,
        "4": this.level4,
        "5": this.level5,
        "6": this.level6,
        "7": this.level7,
        "8": this.level8,
        "9": this.level9,
        "10": this.level10,
        "11": this.level11,
        "12": this.level12,
        "13": this.level13,
        "14": this.level14,
        "15": this.level15,
        "16": this.level16,
        "17": this.level17,
        "18": this.level18,
        "19": this.level19,
        "20": this.level20,
    }

    private pushPaladinFeatures(pc: PlayerCharacter, level: number) {
        this.pushClassFeatures(pc, level, "PALADIN");
    }

    private upgradeLayOnHands(pc: PlayerCharacter) : void {
        pc.findResourceTraitByName("Lay on Hands").resourceMax.value += 5;
    }

    private handlePaladinSpellSelections(pc: PlayerCharacter, params: LevelingParams) {
        this.handleSpellSelections(pc, params, SpellCastingAbility["PALADIN"]);
    }

    private applyPaladinSpellSlots(pc: PlayerCharacter, level: number) {
        SpellSlotFactory.applySpellSlotsAtLevel(pc, level, "SECONDARY");
    }

    level1(pc: PlayerCharacter, params: LevelingParams): void {
        this.pushPaladinFeatures(pc, 1);
        pc.addResourceTraits( { title: "Lay on Hands", description: "Number of hit points you can restore with Lay on Hands", resourceMax: {value: 5} } )
    }

    level2(pc: PlayerCharacter, params: LevelingParams): void {
        this.applyPaladinSpellSlots(pc, 2);
        this.upgradeLayOnHands(pc);
        this.pushPaladinFeatures(pc, 2);
    }

    level3(pc: PlayerCharacter, params: LevelingParams): void {
        this.applyPaladinSpellSlots(pc, 3);
        this.paladinOath = params.archetypeSelection[0].archetype;
        this.upgradeLayOnHands(pc);
        PaladinArchetype.archetypeHelper[this.paladinOath][3](pc, params);
        this.pushPaladinFeatures(pc, 3);
    }
    
    level4(pc: PlayerCharacter, params: LevelingParams): void {
        pc.improveAbilityScores(params.abilityScoreImprovement);
        this.upgradeLayOnHands(pc);
        this.pushPaladinFeatures(pc, 4);
    }

    level5(pc: PlayerCharacter, params: LevelingParams): void {
        this.applyPaladinSpellSlots(pc, 5);
        this.upgradeLayOnHands(pc);
        this.pushPaladinFeatures(pc, 5);
    }

    level6(pc: PlayerCharacter, params: LevelingParams): void {
        this.upgradeLayOnHands(pc);
        this.pushPaladinFeatures(pc, 6);
    }

    level7(pc: PlayerCharacter, params: LevelingParams): void {
        this.applyPaladinSpellSlots(pc, 7);
        this.upgradeLayOnHands(pc);
        PaladinArchetype.archetypeHelper[this.paladinOath][7](pc, params);        
    }

    level8(pc: PlayerCharacter, params: LevelingParams): void {
        pc.improveAbilityScores(params.abilityScoreImprovement);
        this.upgradeLayOnHands(pc);
    }

    level9(pc: PlayerCharacter, params: LevelingParams): void {
        this.applyPaladinSpellSlots(pc, 9);
        this.upgradeLayOnHands(pc);        
    }

    level10(pc: PlayerCharacter, params: LevelingParams): void {
        this.upgradeLayOnHands(pc);        
        this.pushPaladinFeatures(pc, 10);
    }

    level11(pc: PlayerCharacter, params: LevelingParams): void {
        this.upgradeLayOnHands(pc);        
        this.applyPaladinSpellSlots(pc, 11);
        this.pushPaladinFeatures(pc, 11);

    }

    level12(pc: PlayerCharacter, params: LevelingParams): void {
        pc.improveAbilityScores(params.abilityScoreImprovement);
        this.upgradeLayOnHands(pc);        
    }

    level13(pc: PlayerCharacter, params: LevelingParams): void {
        this.applyPaladinSpellSlots(pc, 13);
        this.upgradeLayOnHands(pc);        
    }

    level14(pc: PlayerCharacter, params: LevelingParams): void {
        this.upgradeLayOnHands(pc);        
        this.pushPaladinFeatures(pc, 15);
    }

    level15(pc: PlayerCharacter, params: LevelingParams): void {
        this.applyPaladinSpellSlots(pc, 15);
        PaladinArchetype.archetypeHelper[this.paladinOath][15](pc, params);
        this.upgradeLayOnHands(pc);        
    }

    level16(pc: PlayerCharacter, params: LevelingParams): void {
        pc.improveAbilityScores(params.abilityScoreImprovement);
        this.upgradeLayOnHands(pc);        
    }

    level17(pc: PlayerCharacter, params: LevelingParams): void {
        this.applyPaladinSpellSlots(pc, 17);
        this.upgradeLayOnHands(pc);        
    }

    level18(pc: PlayerCharacter, params: LevelingParams): void {
        this.upgradeLayOnHands(pc);        
    }

    level19(pc: PlayerCharacter, params: LevelingParams): void {
        this.applyPaladinSpellSlots(pc, 19);
        this.upgradeLayOnHands(pc);        
        pc.improveAbilityScores(params.abilityScoreImprovement);
    }

    level20(pc: PlayerCharacter, params: LevelingParams): void {
        this.upgradeLayOnHands(pc);        
        PaladinArchetype.archetypeHelper[this.paladinOath][20](pc, params);
    }
    
}