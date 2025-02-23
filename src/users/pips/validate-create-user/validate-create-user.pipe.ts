import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('inside pip validation');
    console.log(value);
    console.log(metadata);
    const parseIntAge = parseInt(value.age.toString());
    if (isNaN(parseIntAge)) {
      console.log(value.age + 'is not a number');
      throw new HttpException(
        'invalid data type for age',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('parseInt is a number');

    return { ...value, age: parseIntAge };
  }
}
