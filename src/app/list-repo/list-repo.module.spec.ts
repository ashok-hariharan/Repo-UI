import { ListRepoModule } from './list-repo.module';

describe('ListRepoModule', () => {
  let listRepoModule: ListRepoModule;

  beforeEach(() => {
    listRepoModule = new ListRepoModule();
  });

  it('should create an instance', () => {
    expect(listRepoModule).toBeTruthy();
  });
});
