import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    email: string;
    created: Date;
    photoUrl: string;
    thuthar?: string;
    recipeName?: string;
    ingredients?: string;
    steps?: string;
    photos?: Photo[];
}
