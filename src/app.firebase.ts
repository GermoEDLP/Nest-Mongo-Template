import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import {
  AUTH_PROVIDER_X509_CERT_URL,
  AUTH_URI,
  CLIENT_EMAIL,
  CLIENT_ID,
  CLIENT_V509_CERT_URL,
  PRIVATE_KEY,
  PRIVATE_KEY_ID,
  PROJECT_ID,
  TOKEN_URI,
  TYPE,
} from './config/constants';

export class FirebaseConfig {
  firebaseConfig: any;

  constructor(configService: ConfigService) {
    this.firebaseConfig = {
      type: configService.get<string>(TYPE),
      project_id: configService.get<string>(PROJECT_ID),
      private_key_id: configService.get<string>(PRIVATE_KEY_ID),
      private_key: configService.get<string>(PRIVATE_KEY).replace(/\\n/g, '\n'),
      client_email: configService.get<string>(CLIENT_EMAIL),
      client_id: configService.get<string>(CLIENT_ID),
      auth_uri: configService.get<string>(AUTH_URI),
      token_uri: configService.get<string>(TOKEN_URI),
      auth_provider_x509_cert_url: configService.get<string>(
        AUTH_PROVIDER_X509_CERT_URL,
      ),
      client_x509_cert_url: configService.get<string>(CLIENT_V509_CERT_URL),
    };
  }

  initializeApp() {
    admin.initializeApp({
      credential: admin.credential.cert(this.firebaseConfig),
    });
    Logger.log('Firebase initialized');
  }
}
