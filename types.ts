import {IconType} from 'react-icons'

export interface Service {
    Icon: IconType;
    title: string;
    about: string;
}

export interface Skill {
    Icon: IconType;
    name: string;
    level: string;
}

export interface iProject {
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    category: Category[];
    tech_category: string[];
}

export type Category = 'react'|'node'|'express'|'mongo'