import { Injectable } from '@nestjs/common';
import { ConfigService as ApiConfig } from '@nestjs/config';

@Injectable()
export class ConfigService {
    constructor(private readonly apiConfig: ApiConfig) {}
}
