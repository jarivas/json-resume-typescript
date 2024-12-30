export type Location = {
    address: string
    postalCode: string
    city: string
    countryCode: string
    region: string
}

export type Basics = {
    name: string
    label: string
    image?: string
    email: string
    url?: string
    summary: string
    location: Location
}

export type Profile = {
    network: string
    username: string
    url: string
}

export type Work = {
    name: string
    location: string
    description: string
    position: string
    url?: string
    startDate: Date
    endDate?: Date
    summary?: string
    highlights?: string[]
}

export type Volunteer = {
    organization: string
    position: string
    url?: string
    startDate: Date
    endDate?: Date
    summary?: string
    highlights?: string[]
}

export type Education = {
    institution: string
    url?: string
    area: string
    studyType: string
    startDate: Date
    endDate?: Date
    score?: string
    courses?: string[]
}

export type Award = {
    title: string
    date: Date
    awarder: string
    summary: string
}

export type Certificate = {
    name: string
    date: Date
    url?: string
    issuer: string
}

export type Publication = {
    name: string
    publisher: string
    releaseDate: Date
    url?: string
    summary: string
}

export type Skill = {
    name: string
    level: string
    keywords: string[]
}

export type Language = {
    language: string
    fluency: string
}

export type Interest = {
    name: string
    keywords: string[]
}

export type Reference = {
    name: string
    reference: string
}

export type Project = {
    name: string
    description: string
    highlights?: string[]
    keywords?: string[]
    startDate: Date
    endDate?: Date
    url?: string
    roles: string[]
    entity?: string
    type?: string
}

export type Meta = {
    canonical: string
    version: string
    lastModified: Date
}

export type Resume = {
    basics: Basics
    profiles?: Profile[]
    work?: Work[]
    volunteer?: Volunteer[]
    education?: Education[]
    awards?: Award[]
    certificates?: Certificate[]
    publications?: Publication[]
    skills?: Skill[]
    languages?: Language[]
    interests?: Interest[]
    references?: Reference[]
    projects?: Project[]
    meta?: Meta
}