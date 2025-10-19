import { Response, Request } from 'express';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { Items } from 'mercadopago/dist/clients/commonTypes';

export const createPurchaseOrder = async (req: Request, res: Response) => {
	try {
		const orderId = 'ORDEN-TS-' + Date.now();
		const client = new MercadoPagoConfig({
			accessToken: 'APP_USR-1134285596237090-101602-c2ca9ab02329b91280087237618c6b63-2929070224', // AccesToken - Vendedor - Cuenta de Prueba
		});

		const preference = new Preference(client);

		const items: Items[] = [
			{
				id: 'iphone-12-pro-uuid',
				title: 'Iphone 12 pro - 256 GB',
				unit_price: 6500,
				quantity: 1,
			},
		];

		const preferenceData = {
			body: {
				items: items,
				// Referencia de la orden en tu base de datos
				external_reference: orderId,
				back_urls: {
					success: 'https://tu-sitio.com/pago/exitoso',
					pending: 'https://tu-sitio.com/pago/pendiente',
					failure: 'https://tu-sitio.com/pago/fallido',
				},
				auto_return: 'approved' as const,
				payer: {
					email: 'test_user_66265004015135067@testuser.com', // Comprador - Cuenta de prueba
				},
			},
		};

		const response = await preference.create(preferenceData);

		console.log(':: Purcahse Response: ', response);
		if (!response.init_point) throw new Error('Error creating purchase order');

		return res.status(200).redirect(response.init_point);
	} catch (error) {
		console.error('Error: ', JSON.stringify(error, null, 2));
		return res.status(500).send('Error creating purchase order');
	}
};
