import { AppService } from './../app.service';
import { AppController } from './../app.controller';

let appCtrl: AppController;
let appSvc: AppService;
// test de la classe AppController
describe('AppController (e2e)', () => {
  beforeEach(() => {
    appSvc = new AppService();
    appCtrl = new AppController(appSvc);
  });
  // Verificar que la clase AppController existe
  it('should exist', () => {
    expect(appCtrl).toBeDefined();
  });

  // Verificar que la clase AppController tiene el método getHello
  it('should have a getHello method', () => {
    expect(appCtrl.getHello).toBeDefined();
  });

  // Verificar que el método getHello retorna un string
  it('should return a string', () => {
    expect(typeof appCtrl.getHello()).toBe('string');
  });
});
