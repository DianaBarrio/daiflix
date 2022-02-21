export interface FalseFlix {
    navbar: Navbar;
    hero: Film;
}

export interface Navbar {
    logo: Image;
}

export interface Film {
    title: string;
    imgGallery: Image[]
}

export interface Image {
    src: string;
    alt: string;
}

