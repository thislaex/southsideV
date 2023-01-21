import { DefaultDeathSystem } from '@AthenaServer/systems/defaults/death';
import { DefaultInventorySystem } from '@AthenaServer/systems/defaults/inventory';
import { DefaultTimeSystem } from '@AthenaServer/systems/defaults/time';
import { DefaultWeaponItemsSystem } from '@AthenaServer/systems/defaults/weaponItems';
import { DefaultWeatherSystem } from '@AthenaServer/systems/defaults/weather';

export const defaultSystemsConst = {
    death: DefaultDeathSystem,
    inventory: DefaultInventorySystem,
    time: DefaultTimeSystem,
    weaponItems: DefaultWeaponItemsSystem,
    weather: DefaultWeatherSystem,
};
