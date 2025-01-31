import {defineOperationApi} from '@directus/extensions-sdk';
import {createHash} from "node:crypto";

type Options = {
	json_data: any;
	public_key: string;
	secret_key: string;
};

const hashData = (queryArgs, secretKey) => {
	return createHash('sha256').update(`${queryArgs.toString()}:${secretKey}`).digest('hex');
};

const signGetData = (queryArgs, publicKey, secretKey) => {
	queryArgs = new URLSearchParams(queryArgs);
	const time = `${Math.floor(Date.now() / 1000)}`;

	queryArgs.set('publicKey', publicKey);
	queryArgs.set('time', time);

	const hash = hashData(queryArgs.toString(), secretKey);
	queryArgs.set('hash', hash);

	return queryArgs.toString();
};

const hashDataPost = (data, secretKey) => {
	const json = JSON.stringify(data);

	return createHash('sha256').update(`${json}:${secretKey}`).digest('hex');
};

export const signPostData = (data, publicKey, secretKey) => {
	const time = Math.floor(Date.now() / 1000);

	const dataToSign = {
		...data,
		publicKey,
		time
	};
	const hash = hashDataPost(dataToSign, secretKey);
	return JSON.stringify({ ...dataToSign, hash });
};

export default defineOperationApi<Options>({
	id: 'bizprint-sign',
	handler: ({ public_key, secret_key, json_data }) => {
		return {
			get: signGetData(json_data, public_key, secret_key),
			post: signPostData(json_data, public_key,secret_key)
		}
	},
});
