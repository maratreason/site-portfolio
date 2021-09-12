export interface SectionProps {
    image?: string;
    photo?: string;
}

export interface Skill {
    id: number;
    name: string;
}

export interface InfoProject {
    id: number;
    title: string;
    url: string;
    imageSrc: string;
}

export interface InfoProps {
    image?: string;
    title: string;
    desc?: string;
    photo?: string;
    frontSkills?: Skill[];
    backSkills?: Skill[];
    projects?: InfoProject[]
}

export interface InfoRoutes {
    id: number;
    path: string;
}

export interface MobileMenuProps {
    isOpen?: boolean;
    toggle: () => void;
}
