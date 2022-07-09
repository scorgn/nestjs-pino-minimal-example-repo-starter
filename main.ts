import { NestFactory } from '@nestjs/core';
import { Logger, Module } from '@nestjs/common';
import { Logger as PLogger, LoggerModule } from 'nestjs-pino';

@Module({imports: [LoggerModule.forRoot()]})
class ExampleModule {}

(async function() {
  const app = await NestFactory.create(ExampleModule);
  app.useLogger(app.get(PLogger));
  const logger = new Logger('Example');

  logger.log('This is an example of a logger');
})();
