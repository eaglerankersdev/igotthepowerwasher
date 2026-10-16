(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6851],
  {
    255: (a, i, x) => {
      "use strict";

      function r(a) {
        let { moduleIds: i } = a;
        return null;
      }
      (Object.defineProperty(i, "__esModule", {
        value: true,
      }),
        Object.defineProperty(i, "PreloadChunks", {
          enumerable: true,
          get: function () {
            return r;
          },
        }),
        x(5155),
        x(7650),
        x(5744),
        x(589));
    },
    2146: (a, i, x) => {
      "use strict";

      function r(a) {
        let { reason: i, children: x } = a;
        return x;
      }
      (Object.defineProperty(i, "__esModule", {
        value: true,
      }),
        Object.defineProperty(i, "BailoutToCSR", {
          enumerable: true,
          get: function () {
            return r;
          },
        }),
        x(5262));
    },
    4054: (a, i) => {
      "use strict";

      (Object.defineProperty(i, "__esModule", {
        value: true,
      }),
        !(function (a, i) {
          for (var x in i)
            Object.defineProperty(a, x, {
              enumerable: true,
              get: i[x],
            });
        })(i, {
          bindSnapshot: function () {
            return s;
          },
          createAsyncLocalStorage: function () {
            return k;
          },
          createSnapshot: function () {
            return e;
          },
        }));
      let x = Object.defineProperty(
        Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),
        "__NEXT_ERROR_CODE",
        {
          value: "E504",
          enumerable: false,
          configurable: true,
        },
      );
      class r {
        disable() {
          throw x;
        }
        getStore() {}
        run() {
          throw x;
        }
        exit() {
          throw x;
        }
        enterWith() {
          throw x;
        }
        static bind(a) {
          return a;
        }
      }
      let t = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function k() {
        return t ? new t() : new r();
      }
      function s(a) {
        return t ? t.bind(a) : r.bind(a);
      }
      function e() {
        return t
          ? t.snapshot()
          : function (a, ...i) {
              return a(...i);
            };
      }
    },
    5028: (a, i, x) => {
      "use strict";

      x.d(i, {
        default: () => t.a,
      });
      var r = x(6645),
        t = x.n(r);
    },
    5164: (a, i, x) => {
      Promise.resolve().then(x.bind(x, 5434));
    },
    5434: (a, i, x) => {
      "use strict";

      x.d(i, {
        default: () => e,
      });
      var r = x(5155);
      x(2115);
      var t = x(5028);
      let k = JSON.parse(/* LOTTIE_JSON 252622 bytes */ "{}"),
        s = (0, t.default)(() => Promise.all([x.e(9066), x.e(3770)]).then(x.t.bind(x, 3770, 23)), {
          loadableGenerated: {
            webpack: () => [3770],
          },
          ssr: false,
        }),
        e = () => (
          <div className="bg-white">
            <div className="max-w-6xl mx-auto p-8 md:p-16 pb-32 bg-white">
              <div className="flex justify-center mb-8">
                <C_s animationData={k} loop={true} autoplay={true} className="w-auto h-auto" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Annual Maintenance Program</h2>
              <h2 className="text-2xl font-bold text-gray-900  mb-4">{"Annual Maintenance Program – Protect Your Home & Save!"}</h2>
              <p className="text-gray-600 leading-relaxed  mb-4">
                Your home is your biggest investment—keep it looking its best and protect it from damage with our{" "}
                <strong>Annual Maintenance Program</strong>. Regular cleaning not only enhances your home’s curb appeal but also prevents
                costly repairs caused by dirt, mold, algae, and grime buildup
              </p>
              <p className="text-gray-600 leading-relaxed  mb-4">
                By committing to a yearly plan, you’ll enjoy <strong>exclusive savings</strong>, priority scheduling, and the peace of mind
                that comes with a consistently clean and well-maintained property.{" "}
                <strong>Plus, you’ll be our VIP—Very Important Property! 😊</strong>
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works:</h2>
              <ul className="mb-6">
                <li className="text-gray-900">
                  <strong>Free Consultation:</strong>We’ll visit your home to assess your needs and recommend a customized cleaning plan.
                </li>
                <li className="text-gray-900">
                  <strong>Tailored Schedule:</strong>Choose the frequency of services that works best for you—monthly, quarterly, or
                  annually.
                </li>
                <li className="text-gray-900">
                  <strong>Hassle-Free Maintenance:</strong>We’ll handle all the scheduling and reminders, so you don’t have to worry about a
                  thing.
                </li>
                <li className="text-gray-900">
                  <strong>{"Exclusive Savings: "}</strong>
                  <strong>On average, enjoy around 35% off</strong>regular pricing when you sign up for an annual contract.
                </li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900  mb-4">Benefits of Our Services</h2>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1.Pressure Washing</h2>
              <ul className="mb-6">
                <li className="text-gray-900  mt-0.5">
                  <strong>Restores Surfaces:</strong>Removes stubborn stains, algae, dirt, and more from driveways, walkways, patios,
                  fences, etc., bringing them back to like-new condition.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>Improves Safety:</strong>
                  {" Eliminates slippery moss, algae, and other hazards, reducing the risk of slips and falls."}
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>Boosts Curb Appeal:</strong>Enhances the overall look of your property, making it more inviting and attractive.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>Prevents Damage:</strong>Regular cleaning prevents surface degradation, saving you money on costly repairs or
                  replacements.
                </li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2.House Washing</h2>
              <ul className="mb-6">
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Protects Siding & Surfaces: "}</strong>Removes mold, mildew, dirt, and contaminants that cause long-term damage
                  to vinyl, wood, and other materials.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Improves Indoor Air Quality: "}</strong>Eliminates pollen, mold spores, and allergens that can enter your home
                  through windows and vents.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Preserves Property Value: "}</strong>
                  {" Maintains a clean, fresh exterior to boost curb appeal and market value."}
                </li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3.Roof Washing</h2>
              <ul className="mb-6">
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Extends Roof Life: "}</strong>Removes damaging algae, moss, lichen, etc., that can weaken shingles and lead to
                  leaks.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>Improves Energy Efficiency:</strong>
                  {" A clean roof reflects sunlight better, helping to regulate your home’s temperature and reduce energy costs."}
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Enhances Appearance: "}</strong>
                  {" Restores your roof’s original color, making your home look newer and well-cared-for."}
                </li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4.Window Cleaning</h2>
              <ul className="mb-6">
                <li className="text-gray-900  mt-0.5">
                  <strong>Improves Natural Light:</strong>Removes dirt, grime, streaks, etc., allowing more sunlight to brighten your home.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>Protects Window Surfaces:</strong>Prevents buildup that can scratch or damage glass over time.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Boosts Curb Appeal: "}</strong>Clean windows make your home look polished and well-maintained from the inside
                  and out.
                </li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5.Gutter Cleaning</h2>
              <ul className="mb-6">
                <li className="text-gray-900  mt-0.5">
                  <strong>Prevents Water Damage:</strong>Keeps gutters free of leaves, debris, etc., ensuring proper drainage and protecting
                  your roof, siding, and foundation.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>Reduces Pest Infestations:</strong>Eliminates standing water and debris that attract pests like mosquitoes,
                  rodents, birds, etc.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>Extends Gutter Life:</strong>
                  {" Prevents rust and corrosion caused by trapped moisture and debris."}
                </li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Annual Program?</h2>
              <ul className="mb-6">
                <li className="text-gray-900 mt-0.5">
                  <strong>Save Money:</strong>On average, enjoy around 35% off regular pricing with an annual contract.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Save Time: "}</strong>We handle scheduling, reminders, and priority bookings.
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Health & Safety: "}</strong>
                  {" Reduce allergens and eliminate hazards like slippery surfaces."}
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Protect Your Investment: "}</strong>
                  {" Prevent costly repairs and extend the life of your home’s exterior."}
                </li>
                <li className="text-gray-900  mt-0.5">
                  <strong>{"Eco-Friendly Solutions: "}</strong>
                  {" Safe for your family, pets, and the environment."}
                </li>
              </ul>
              <div className="overflow-x-auto mb-6">
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2">Service</th>
                      <th className="border border-gray-300 px-4 py-2">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Pressure Washing</td>
                      <td className="border border-gray-300 px-4 py-2">1x per year (Driveways, walkways, patios, etc.)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">House Washing</td>
                      <td className="border border-gray-300 px-4 py-2">1x per year (Siding, mold removal, allergen reduction)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Roof Washing</td>
                      <td className="border border-gray-300 px-4 py-2">1x per year (Algae, moss, and lichen removal)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Window Cleaning</td>
                      <td className="border border-gray-300 px-4 py-2">
                        ☐ x per year (Write in your preferred frequency: 1x, 2x, 4x, etc.)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Gutter Cleaning</td>
                      <td className="border border-gray-300 px-4 py-2">{"2x per year (Spring & fall to prevent clogs)"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="text-2xl font-bold text-gray-900  mb-4">Optional Add-Ons</h2>
              <p className="text-gray-600 leading-relaxed  mb-4">
                {" "}
                Need something extra? Let us know! We’re happy to accommodate additional services.
              </p>
              <p className="text-gray-600 leading-relaxed  mb-4">
                <strong>Additional Services Requested:</strong>
              </p>
              <p className="text-gray-600 leading-relaxed  mb-4">
                (Examples: Deck cleaning, solar panel cleaning, paver sealing, graffiti removal, outdoor furniture cleaning, etc.)
              </p>
              <p className="text-gray-600 leading-relaxed  mb-4">
                <strong>Special Instructions or Notes:</strong>
              </p>
              <h2 className="text-2xl font-bold text-gray-900  mb-4">Terms for Custom Requests:</h2>
              <ul className="mb-6">
                <li className="text-gray-900">
                  ✔ All custom requests are subject to a free property assessment for pricing and feasibility.
                </li>
                <li className="text-gray-900 ">✔ Annual Program members receive 15% off any approved custom services.</li>
                <li className="text-gray-900">✔ Services must align with our safety and environmental guidelines.</li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900  mb-4">Contract Terms</h2>
              <ul className="mb-6">
                <li className="text-gray-900 ">
                  {"✔ "}
                  <strong>Savings:</strong>
                  {" Average 35% off regular pricing."}
                </li>
                <li className="text-gray-900">
                  {"✔ "}
                  <strong>Cancellation:</strong>
                  {" 30 days’ notice required. 20% fee if canceled within 30 days of a scheduled service."}
                </li>
                <li className="text-gray-900">
                  {"✔ "}
                  <strong>Flexibility:</strong>
                  {" Add or remove services mid-year (price adjustments may apply)."}
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Signature:</h3>
              <p className="text-gray-500  mt-6">
                <strong>Date:</strong>.........................
              </p>
              <h2 className="text-2xl f text-[#00C6F9] mt-6">Ready to Get Started?</h2>
              <p className="text-gray-500  mt-6">
                {"Join hundreds of satisfied homeowners who trust us to protect their investment. Contact us today for your "}
                <strong>free consultation!</strong>
              </p>
            </div>
          </div>
        );
    },
    5744: (a, i, x) => {
      "use strict";

      (Object.defineProperty(i, "__esModule", {
        value: true,
      }),
        Object.defineProperty(i, "workAsyncStorage", {
          enumerable: true,
          get: function () {
            return r.workAsyncStorageInstance;
          },
        }));
      let r = x(7828);
    },
    6645: (a, i, x) => {
      "use strict";

      (Object.defineProperty(i, "__esModule", {
        value: true,
      }),
        Object.defineProperty(i, "default", {
          enumerable: true,
          get: function () {
            return t;
          },
        }));
      let r = x(8229)._(x(7357));
      function t(a, i) {
        var x;
        let t = {};
        "function" == typeof a && (t.loader = a);
        let k = {
          ...t,
          ...i,
        };
        return (0, r.default)({
          ...k,
          modules: null == (x = k.loadableGenerated) ? void 0 : x.modules,
        });
      }
      ("function" == typeof i.default || ("object" == typeof i.default && null !== i.default)) &&
        void 0 === i.default.__esModule &&
        (Object.defineProperty(i.default, "__esModule", {
          value: true,
        }),
        Object.assign(i.default, i),
        (a.exports = i.default));
    },
    7357: (a, i, x) => {
      "use strict";

      (Object.defineProperty(i, "__esModule", {
        value: true,
      }),
        Object.defineProperty(i, "default", {
          enumerable: true,
          get: function () {
            return o;
          },
        }));
      let r = x(5155),
        t = x(2115),
        k = x(2146);
      function s(a) {
        return {
          default: a && "default" in a ? a.default : a,
        };
      }
      x(255);
      let e = {
          loader: () => Promise.resolve(s(() => null)),
          loading: null,
          ssr: true,
        },
        o = function (a) {
          let i = {
              ...e,
              ...a,
            },
            x = (0, t.lazy)(() => i.loader().then(s)),
            o = i.loading;
          function l(a) {
            let s = o ? <C_o isLoading={true} pastDelay={true} error={null} /> : null,
              e = !i.ssr || !!i.loading,
              l = e ? t.Suspense : t.Fragment,
              m = i.ssr ? (
                <C_r.Fragment>
                  {null}
                  <C_x {...a} />
                </C_r.Fragment>
              ) : (
                <C_k.BailoutToCSR reason="next/dynamic">
                  <C_x {...a} />
                </C_k.BailoutToCSR>
              );
            return (
              <C_l
                {...(e
                  ? {
                      fallback: s,
                    }
                  : {})}
              >
                {m}
              </C_l>
            );
          }
          return ((l.displayName = "LoadableComponent"), l);
        };
    },
    7828: (a, i, x) => {
      "use strict";

      (Object.defineProperty(i, "__esModule", {
        value: true,
      }),
        Object.defineProperty(i, "workAsyncStorageInstance", {
          enumerable: true,
          get: function () {
            return r;
          },
        }));
      let r = (0, x(4054).createAsyncLocalStorage)();
    },
  },
  (a) => {
    var i = (i) => a((a.s = i));
    (a.O(0, [8441, 1684, 7358], () => i(5164)), (_N_E = a.O()));
  },
]);
