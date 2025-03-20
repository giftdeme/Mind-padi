export async function POST(request: Request) {
	const { email } = await request.json();
	try {
		const response = await fetch(
			`https://api.emailoctopus.com/lists/${process.env.EMAIL_OCTOPUS_LIST_ID}/contacts`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.EMAIL_OCTOPUS_API_KEY}`,
				},
				body: JSON.stringify({
					email_address: email,
				}),
			},
		);
		if (response.ok) {
			return new Response("Email submitted successfully!", {
				status: 201,
			});
		}
		return new Response("Failed to submit email!", {
			status: response.status,
			statusText: response.statusText,
		});
	} catch (error) {
		return new Response("Internal server error", { status: 500 });
	}
}
