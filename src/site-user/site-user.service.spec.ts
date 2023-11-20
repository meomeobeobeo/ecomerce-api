import { Test, TestingModule } from '@nestjs/testing'
import { SiteUserService } from './site-user.service'

describe('SiteUserService', () => {
    let service: SiteUserService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SiteUserService],
        }).compile()

        service = module.get<SiteUserService>(SiteUserService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
