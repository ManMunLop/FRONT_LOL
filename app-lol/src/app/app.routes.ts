import { Routes } from '@angular/router';
import { Contact } from '../components/contact/contact';
import { Home } from '../components/home/home';
import { CharacterDetail } from '../components/character-detail/character-detail';
import { CharacterMultirol } from '../components/character-multirol/character-multirol';
import { CharacterTank } from '../components/character-tank/character-tank';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'contact', component: Contact},
    {path: 'character/:id', component: CharacterDetail},
    {path: 'multirol', component: CharacterMultirol},
    {path: 'characterTank', component: CharacterTank}
];