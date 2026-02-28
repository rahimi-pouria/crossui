import { Controller, Get, UseGuards } from '@nestjs/common';
import { CustomGuard } from './guard.service';
@Controller('guard')

@Controller('example')
export class ExampleController {

    @Get('restricted')
    @UseGuards(new CustomGuard((req) => req.headers['x-allowed'] === 'true'))
    getRestrictedData() {
        return { message: 'You passed the custom guard check!' };
    }

    @Get('open')
    getOpenData() {
        return { message: 'Everyone can access this route' };
    }
}


export class GuardController {}
