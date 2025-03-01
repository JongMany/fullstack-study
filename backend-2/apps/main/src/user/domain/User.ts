import { Entity, EntityClass, Identifier } from '@lib/shared';

interface UserProps {
  id?: string;
  email: string;
  phone: `${number}-${number}-${number}`;
  username: string;
  password: string;
}

@Entity
export class User extends EntityClass<UserProps> {
  constructor(props: UserProps) {
    super(props, new Identifier(props.id));
  }
}
