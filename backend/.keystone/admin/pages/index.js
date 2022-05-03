import React from 'react';

import { HomePage } from '@keystone-6/admin-ui/pages/HomePage';
import { gql } from '@keystone-6/admin-ui/apollo';

export default function Home() {
  return (
    <HomePage
      query={gql`
        query {
          keystone {
            adminMeta {
              lists {
                key
                fields {
                  path
                  createView {
                    fieldMode
                  }
                }
              }
            }
          }
          User: _allUsersMeta {
            count
          }
          Product: _allProductsMeta {
            count
          }
          ProductImage: _allProductImagesMeta {
            count
          }
          CartItem: _allCartItemsMeta {
            count
          }
          OrderItem: _allOrderItemsMeta {
            count
          }
          Order: _allOrdersMeta {
            count
          }
          Role: _allRolesMeta {
            count
          }
        }
      `}
    />
  );
}
