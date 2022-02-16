import { Skills } from "./skills";

export class Profile {
  userId: string = '';
  name: string = '';
  associateId: string = '';
  email: string = '';
  mobile: string = '';
  skills: Skills = new Skills();
}
