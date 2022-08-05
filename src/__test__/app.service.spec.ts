import { AppService } from './../app.service';

let appSvc: AppService;

// Test de AppService
describe('AppService (e2e)', () => {
  beforeEach(() => {
    appSvc = new AppService();
  });

  // Verificar que la clase AppService existe
  it('should exist', () => {
    expect(appSvc).toBeDefined();
  });

  // Verificar que la clase AppService tiene el método getHello
  it('should have a getHello method', () => {
    expect(appSvc.getHello).toBeDefined();
  });

  // Verificar que el método getHello retorna un string
  it('should return a string', () => {
    expect(typeof appSvc.getHello()).toBe('string');
  });
});
