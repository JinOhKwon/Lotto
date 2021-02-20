import * as dotenv from 'dotenv';

/**
 * 환경 인터페이스
 */
interface Config {
    /**
     * api url 주소
     */
    apiUrl: string | undefined;
}

/**
 * 환경 서비스
 */
class ConfigService {
    /**
     * 접두사
     */
    private prefix = 'REACT_APP';

    /**
     * 생성자
     */
    constructor() {
        const nodeEnv = this.getNodeEnv();
        dotenv.config({
            path: `.env.${nodeEnv}`,
        });

        // 노드 정보 확인 하려면 주석 해제
        // console.info(process.env);
    }

    /**
    * 노드 환경을 반환한다.
    */
    getNodeEnv(): string {
        return this.get('NODE_ENV') || 'development';
    }

    /**
     * 환경정보를 반환한다.
     */
    getConfig(): Config {
        return {
            apiUrl: this.get(`${this.prefix}_APIURL`),
        };
    }


    /**
     * 원하는 키값의 환경정보를 반환한다.
     *
     * @param key 키
     */
    public get(key: string): string | undefined {
        return process.env[key];
    }
}

export const configService = new ConfigService();
