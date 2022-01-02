export type CountryPrimaryDetailsProps = {
  name: string;
  capital: string;
  flag: string;
  population: number;
  region: string;
};

export type NameProps = {
  name: string;
};

export type CountrySecondaryDetailsProps = {
  flag: string;
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: NameProps[];
  languages: NameProps[];
  borders: string[];
};
