import BuildType from '../types/BuildType';
import Build from '../models/aov/Build'
import Hero from '../models/aov/Hero'
import GameMode from '../models/aov/Hero'
import User from '../models/aov/Hero'
import BuildUpdateType from '../types/BuildUpdateType'

const editBuild = {
  type: BuildType,
  args: {
    input: { type: BuildUpdateType }
  },
  async resolve(parent, { input }){
    return Build.update(
      {
        name: input.name,
        user_id: input.user_id,
        item_1: input.item_1,
        item_2: input.item_2,
        item_3: input.item_3,
        item_4: input.item_4,
        item_5: input.item_5,
        item_6: input.item_6,
        talent_id: input.talent_id,
        hero_id: input.hero_id,
        game_mode_id: input.game_mode_id,
        version_id: input.version_id,
        notes: input.notes,
      },
      { where: { id: input.id }}
    )
  }
};

export default editBuild;
