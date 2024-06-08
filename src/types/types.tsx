export interface Link {
  name: string;
  url: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
}

export interface Section {
  title: string;
  links?: Link[];
  socialMedia?: SocialMedia[];
}

export interface FooterType {
  sections: Section[];
  copyright: string;
}
