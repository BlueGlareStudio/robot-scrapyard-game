export default class Inventory {
    constructor() {
        this.ammo = {
            pistol: 100,
            autoRifle: 100
        };
        this.currentWeapon = 'pistol';
    }
    hasAmmo() {
        return this.ammo[this.currentWeapon] > 0;
    }
    consumeAmmo() {
        if (this.hasAmmo()) {
            this.ammo[this.currentWeapon]--;
            return true;
        }
        return false;
    }
}