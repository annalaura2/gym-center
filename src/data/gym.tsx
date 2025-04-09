import { FaBicycle, FaSwimmer, FaRunning, FaDumbbell, FaMusic } from 'react-icons/fa';
import { GiPunch, GiMeditation, GiBoxingGlove } from 'react-icons/gi';
import { GrYoga } from 'react-icons/gr';
import { IoMdFitness } from 'react-icons/io';
import { WithTranslation } from 'react-i18next';
import React from 'react';

export interface Igym {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const gymData = (t: WithTranslation["t"]): Igym[] => [
  {
    name: t('gym.generalGym.name'),
    description: t('gym.generalGym.description'),
    icon: <IoMdFitness/>,
  },
  {
    name: t('gym.yoga.name'),
    description: t('gym.yoga.description'),
    icon: <GrYoga/>,
  },
  {
    name: t('gym.boxing.name'),
    description: t('gym.boxing.description'),
    icon: <GiBoxingGlove/>,
  },
  {
    name: t('gym.cycling.name'),
    description: t('gym.cycling.description'),
    icon: <FaBicycle/>,
  },
  {
    name: t('gym.swimming.name'),
    description: t('gym.swimming.description'),
    icon: <FaSwimmer/>,
  },
  {
    name: t('gym.running.name'),
    description: t('gym.running.description'),
    icon: <FaRunning/>,
  },
  {
    name: t('gym.dance.name'),
    description: t('gym.dance.description'),
    icon: <FaMusic/>,
  },
  {
    name: t('gym.martialArts.name'),
    description: t('gym.martialArts.description'),
    icon: <GiPunch/>,
  },
  {
    name: t('gym.pilates.name'),
    description: t('gym.pilates.description'),
    icon: <GiMeditation/>,
  },
  {
    name: t('gym.weightlifting.name'),
    description: t('gym.weightlifting.description'),
    icon: <FaDumbbell/>,
  },
];

export default gymData;