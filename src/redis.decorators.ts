import { Inject } from '@nestjs/common';
import { DEFAULT_REDIS_CLIENT } from './redis.constants';

export const InjectRedis = (name = DEFAULT_REDIS_CLIENT): ParameterDecorator => {
  return Inject(name);
};