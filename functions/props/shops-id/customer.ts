import type { EdgeProps } from 'vitedge'

async function postGraphQlData(query: any, variables: any) {
  console.log('HASURA_GRAPHQL_URL', import.meta.env.VITEDGE_HASURA_GRAPHQL_URL)
  const url = import.meta.env.VITEDGE_HASURA_GRAPHQL_URL as string
  const secret = import.meta.env.VITEDGE_HASURA_ADMIN_SECRET as string
  const res = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': secret,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const data = await res.json()
  console.log('[data]', query, variables, data)
  return data
}


const shopInfo = `
  query shop($id: uuid!) {
    shop: shop_by_pk(id: $id) {
      id
    }
  }
`

export default <EdgeProps>{
  async handler({ params }) {
    const res = await postGraphQlData(shopInfo, { id: params?.id })
    console.log(res);
    return {
      data: {
        valid: !!res?.data?.shop?.id || false
      },
    }
  },
  options: {
    cache: {
      html: 60 * 60 * 24 * 7,
    },
  },
}
