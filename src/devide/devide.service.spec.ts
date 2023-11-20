import { Test, TestingModule } from '@nestjs/testing'
import { DevideService } from './devide.service'

describe('DevideService', () => {
    let service: DevideService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DevideService],
        }).compile()

        service = module.get<DevideService>(DevideService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
