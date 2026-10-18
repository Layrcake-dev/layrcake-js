// This file is generated from openapi.json by scripts/generate.mjs.
// Do not edit it by hand. Run `npm run generate` after updating the spec.

export interface paths {
    "/v1/verify_email": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["verify_email"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["enrich"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/find_leads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["find_leads"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/find_intent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["find_intent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/check_companies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["check_companies"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/find_companies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["find_companies"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/enrich_company": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["enrich_company"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/find_posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["find_posts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/setup_sending": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["setup_sending"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/campaigns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_campaign"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/add_leads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["add_leads"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/launch_campaign": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["launch_campaign"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/get_replies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["get_replies"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/get_reply": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["get_reply"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/set_lead_status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["set_lead_status"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/reply_to_thread": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["reply_to_thread"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/research_company": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["research_company"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/prospect_picture": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["prospect_picture"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/llm/chat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["llm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Who this key is and what it may do. Call first. Free. */
        get: operations["get_me"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/trail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Your workspace's outcome record, newest first, typed per kind. Requires trail:read. Free. */
        get: operations["get_trail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/trail/export.csv": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Complete bounded trail CSV. Requires trail:read and the pilot gate; free.
         * @description One snapshot; at most 10,000 events, 1,000 approvals, 5,000 decisions, 10 MiB and five seconds. No partial downloads. Identity/access changes require regeneration. Private no-store attachment. CSV cells are quoted after prefixing an apostrophe to formula-leading text or leading tab/CR/LF; compare parsed cells after that transform, retaining ISO timestamps. Proof omits recipient identities and content; supporting settlement events remain separate from directly campaign-filtered events.
         */
        get: operations["export_trail_csv"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/campaigns/{id}/proof": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Whole retained campaign proof as safe JSON. Requires trail:read and the pilot gate; free.
         * @description One snapshot; at most 10,000 events, 1,000 approvals, 5,000 decisions, 10 MiB and five seconds. No partial downloads. Identity/access changes require regeneration. Private no-store attachment. CSV cells are quoted after prefixing an apostrophe to formula-leading text or leading tab/CR/LF; compare parsed cells after that transform, retaining ISO timestamps. Proof omits recipient identities and content; supporting settlement events remain separate from directly campaign-filtered events.
         */
        get: operations["get_campaign_proof"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/keys/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Tighten another key's policy (lower caps/limits, drop scopes). Requires control:manage. Loosening needs an owner in the console. Every external action needs a person's approval; autonomous_external_actions is deprecated, accepted only as false and always reported as false. */
        patch: operations["tighten_key_policy"];
        trace?: never;
    };
    "/v1/do_not_contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add up to 5,000 emails to the workspace do-not-contact list. campaign:write required. No domains or loosening. DNC_IMPORT_ENABLED defaults to NO; also requires list release. dry_run writes nothing. */
        post: operations["import_do_not_contact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/kill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Stop sending for the whole workspace: pauses every launching/active campaign (provider-verified) and blocks new launches, purchases and replies until an owner clears it in the console. Requires control:manage. */
        post: operations["kill_sending"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/campaigns/{id}/pause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pause one campaign through verified containment. Requires control:manage and limits controls enabled. Resume needs a signed-in payer owner. */
        post: operations["pause_campaign"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/operations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_operation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    verify_email: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    email: string;
                    /** @description Spend ceiling for this call, in credits. If the most the call can cost is above it, the call is refused before anything is reserved or charged. It is a ceiling only: it never lets the call use a dearer source. Where spend ceilings aren't available to this key yet, a request that sets it is refused with the reason. */
                    budget_credits?: number;
                    /** @description Return this call's plan instead of running it, as of evaluated_at: the most it can cost, how many sources could answer, what budget_credits changes, and every limit the real call would trip. Nothing is looked up, reserved or charged, and a later call may differ. Where previews aren't available to this key yet, a request that sets it is refused with the reason. */
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            email: string;
                            /** @enum {string} */
                            status: "valid" | "invalid" | "catch_all_valid" | "catch_all_unknown" | "unknown" | "risky";
                            is_catch_all_domain: boolean;
                            checked_at: string;
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "verify_email";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    candidate_sources: number;
                                    maximum_credits: string;
                                    budget_credits: string | null;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    enrich: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    person: {
                        full_name?: string;
                        first_name?: string;
                        last_name?: string;
                        email?: string;
                        /** Format: uri */
                        linkedin_url?: string;
                        company_name?: string;
                        /** @description Company website domain or URL, e.g. acme.com or https://www.acme.com/about */
                        company_domain?: string;
                        title?: string;
                    };
                    /** @description What to look up. work_email and profile run the email lookup (5 credits on a hit), which returns a mobile number too when its source has one. mobile_phone also runs a separate mobile search when the email lookup found none: 17 credits when that search finds one, 5 when the mobile came with the email, nothing when no mobile is found; a mobile_phone-only request that finds only an email is free and returns nothing. Where this isn't applied for your key yet, every call runs the same email lookup whatever this lists. */
                    want?: ("work_email" | "mobile_phone" | "profile")[];
                    /** @description Spend ceiling for this call, in credits. If the most the call can cost is above it, the call is refused before anything is reserved or charged. */
                    max_credits?: string;
                    /**
                     * @description Source preference for this call: balanced (the default), cheapest (the lowest-cost sources), broadest (the sources expected to find the most) or fastest. The price doesn't change with it. Where route choice isn't available to this key yet, only balanced is accepted.
                     * @enum {string}
                     */
                    route?: "balanced" | "cheapest" | "broadest" | "fastest";
                    /** @description Spend ceiling for this call, in credits. The same ceiling as max_credits, as a number: send one or the other. If the most the call can cost is above it, the call is refused before anything is reserved or charged. It is a ceiling only: it never lets the call use a dearer source. Where spend ceilings aren't available to this key yet, a request that sets it is refused with the reason. */
                    budget_credits?: number;
                    /** @description Return this call's plan instead of running it, as of evaluated_at: the most it can cost, how many sources could answer, what budget_credits changes, and every limit the real call would trip. Nothing is looked up, reserved or charged, and a later call may differ. Where previews aren't available to this key yet, a request that sets it is refused with the reason. */
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            /** @enum {string} */
                            outcome: "hit" | "partial" | "miss";
                            contact: {
                                fingerprint: string;
                                full_name: string | null;
                                title: string | null;
                                company_name: string | null;
                                company_domain: string | null;
                                work_email: string | null;
                                work_email_status: ("valid" | "catch_all" | "unknown" | "not_found") | null;
                                email_verdict?: ("valid" | "invalid" | "catch_all_valid" | "catch_all_unknown" | "unknown" | "risky") | null;
                                mobile_phone: string | null;
                                linkedin_url: string | null;
                                location: string | null;
                                observed_at: string | null;
                            } | null;
                            from_cache: boolean;
                            /** @description Present only when budget_credits or max_credits was below the price of the mobile search: the wants listed were dropped so the email lookup fits. */
                            dropped_to_fit?: "mobile_phone"[];
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "enrich";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    candidate_sources: number;
                                    maximum_credits: string;
                                    budget_credits: string | null;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    find_leads: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "audience": "Heads of Sales and VPs of Sales at US software companies with 50 to 500 employees",
                 *       "titles": [
                 *         "Head of Sales",
                 *         "VP Sales"
                 *       ],
                 *       "industries": [
                 *         "Software Development"
                 *       ],
                 *       "locations": [
                 *         "United States"
                 *       ],
                 *       "company_headcount": {
                 *         "min": 50,
                 *         "max": 500
                 *       },
                 *       "limit": 25
                 *     }
                 */
                "application/json": {
                    audience: string;
                    titles?: string[];
                    locations?: string[];
                    industries?: string[];
                    company_domains?: string[];
                    company_headcount?: {
                        min?: number;
                        max?: number;
                    };
                    /** @default 25 */
                    limit?: number;
                    /**
                     * @description Source preference for this call: balanced (the default), cheapest (the lowest-cost sources), broadest (the sources expected to find the most) or fastest. The price doesn't change with it. Where route choice isn't available to this key yet, only balanced is accepted.
                     * @enum {string}
                     */
                    route?: "balanced" | "cheapest" | "broadest" | "fastest";
                    /** @description Spend ceiling for this call, in credits. If the most the call can cost is above it, limit is lowered to the largest that fits and result.budget_applied says so; the call is refused, before anything is reserved or charged, only when not even one lead fits. It is a ceiling only: it never lets the call use a dearer source. Where spend ceilings aren't available to this key yet, a request that sets it is refused with the reason. */
                    budget_credits?: number;
                    /** @description Return this call's plan instead of running it, as of evaluated_at: the most it can cost, how many sources could answer, what budget_credits changes, and every limit the real call would trip. Nothing is looked up, reserved or charged, and a later call may differ. Where previews aren't available to this key yet, a request that sets it is refused with the reason. */
                    dry_run?: boolean;
                    /** @description Accept a previous answer's offer: send the same call again, unchanged, with its offer.offer_token. Only the premium step runs, as its own charge at the offer's price, up to its max_credits; the token works once, until expires_at, and only when max_credits is within this key's premium allowance. Where premium offers aren't available to this key yet, a request that sets it is refused with the reason. */
                    offer_token?: string;
                    /**
                     * @description Consent, for this call only, to a dearer source when the standard sources come back short, as long as the whole call, the premium step included, stays within budget_credits (which it requires). The premium step is charged separately and reported in result.premium_step. Without it, budget_credits is only a ceiling. Where premium offers aren't available to this key yet, a request that sets it is refused with the reason.
                     * @constant
                     */
                    premium?: "within_budget";
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            match_check?: {
                                /** @enum {string} */
                                status: "checked" | "partial" | "unchecked";
                                kept: number;
                                withheld: number;
                                not_checked: number;
                                unsure?: number;
                                charged?: number;
                            };
                            leads: {
                                fingerprint: string;
                                full_name: string | null;
                                title: string | null;
                                company_name: string | null;
                                company_domain: string | null;
                                work_email: string | null;
                                work_email_status: ("valid" | "catch_all" | "unknown" | "not_found") | null;
                                email_verdict?: ("valid" | "invalid" | "catch_all_valid" | "catch_all_unknown" | "unknown" | "risky") | null;
                                mobile_phone: string | null;
                                linkedin_url: string | null;
                                location: string | null;
                                observed_at: string | null;
                            }[];
                            total_found: number;
                            budget_applied?: {
                                limit_requested: number;
                                limit_used: number;
                            };
                            offer?: {
                                offer_token: string;
                                /** @enum {string} */
                                reason: "none_found_standard" | "partially_filled" | "filter_needs_premium";
                                credits_per_result: string;
                                max_results: number;
                                max_credits: string;
                                expires_at: string;
                            };
                            premium_step?: {
                                request_id: string;
                                results_added: number;
                                credits_charged: string;
                            };
                            interpreted?: {
                                places: {
                                    requested: string;
                                    region: string;
                                    cities: string[];
                                    version: string;
                                }[];
                            };
                            title_filter?: {
                                withheld: number;
                            };
                            interpreted_industries?: {
                                phrase: string;
                                /** @enum {string} */
                                how: "exact" | "alias" | "none";
                                industries: string[];
                                /** @constant */
                                coarse?: "niche not applied";
                                candidates?: string[];
                            }[];
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "find_leads";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    limit: number;
                                    budget_applied: {
                                        limit_requested: number;
                                        limit_used: number;
                                    } | null;
                                    candidate_sources: number;
                                    maximum_credits: string;
                                    budget_credits: string | null;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    find_intent: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "company_domains": [
                 *         "acme.com",
                 *         "example.io"
                 *       ]
                 *     }
                 */
                "application/json": {
                    /** @description Optional goal: what you sell and to whom. Always accepted. Until goal ordering is available, signals keep today’s order with ranking.by recency and date-based why_now flags; no change to charges. */
                    audience?: string;
                    company_domains: string[];
                    /** Format: date */
                    since?: string;
                    within_days?: number;
                    /** @description Hiring role filter, up to 25 job titles or phrases: a hiring post counts only when it is one of these roles. Put a role in double quotes to match it word for word. Applies to hiring only; job_change events carry no structured role field. */
                    roles?: string[];
                    /** @description Signal families to check. hiring = live job posts with evidence URLs; funding, news, job_change = dated events. Omit it to check hiring first: only hiring is checked, and a hiring company's latest funding round comes with it; list funding explicitly to check every company (a paid check). DEPRECATED: technology — a present-day vendor detection with no adoption date, not a buying signal; use find_companies.technologies instead. Still accepted in v1. */
                    signals?: ("hiring" | "technology" | "funding" | "news" | "job_change")[];
                    /** @description Spend ceiling for this call, in credits. If the most the call can cost is above it, the call is refused before anything is reserved or charged. No company you sent is dropped to fit. It is a ceiling only: it never lets the call use a dearer source. Where spend ceilings aren't available to this key yet, a request that sets it is refused with the reason. */
                    budget_credits?: number;
                    /** @description Return this call's plan instead of running it, as of evaluated_at: the most it can cost, how many sources could answer, what budget_credits changes, and every limit the real call would trip. Nothing is looked up, reserved or charged, and a later call may differ. Where previews aren't available to this key yet, a request that sets it is refused with the reason. */
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            next?: {
                                /** @enum {string} */
                                reason: "check_funding" | "check_news" | "research_strongest" | "research_deeper" | "find_people" | "find_profile";
                                text: string;
                                /** @enum {string} */
                                verb: "find_intent" | "research_company" | "find_leads" | "enrich";
                                params: {
                                    [key: string]: unknown;
                                };
                                max_credits: string;
                            }[];
                            ranking?: {
                                /** @enum {string} */
                                by: "goal" | "recency";
                                judged: number;
                                unsure?: number;
                                version: string;
                                why_now_judged?: number;
                                companies?: string[];
                            };
                            signals: {
                                company_domain: string;
                                /** @enum {string} */
                                signal: "hiring" | "technology" | "funding" | "news" | "job_change";
                                summary: string;
                                observed_at: string;
                                evidence_url: string | null;
                                title?: string;
                                /** @enum {string} */
                                news_type?: "funding" | "product" | "partnership" | "customers" | "expansion" | "leadership" | "layoffs" | "acquisition" | "challenges" | "recognition" | "other";
                                why_now?: boolean;
                                /** @enum {string} */
                                why_now_basis?: "judged" | "date";
                            }[];
                            domain_status?: {
                                company_domain: string;
                                /** @enum {string} */
                                status: "complete" | "partial" | "unavailable";
                                requested_signals: ("hiring" | "technology" | "funding" | "news" | "job_change")[];
                                completed_signals: ("hiring" | "technology" | "funding" | "news" | "job_change")[];
                                unavailable_signals: {
                                    /** @enum {string} */
                                    signal: "hiring" | "technology" | "funding" | "news" | "job_change";
                                    /** @enum {string} */
                                    reason: "vendor_account" | "invalid_request" | "rate_limited" | "temporarily_paused" | "upstream_error";
                                    retry_after_seconds?: number;
                                }[];
                                skipped_signals?: {
                                    /** @enum {string} */
                                    signal: "hiring" | "technology" | "funding" | "news" | "job_change";
                                    /** @enum {string} */
                                    reason: "default_hiring_first";
                                }[];
                                charge?: {
                                    credits: string;
                                    signal: boolean;
                                    paid_checks: number;
                                };
                                roles_check?: {
                                    /** @enum {string} */
                                    method: "meaning" | "literal";
                                    postings_rejected: number;
                                };
                            }[];
                            historical?: {
                                company_domain: string;
                                /** @enum {string} */
                                signal: "hiring" | "technology" | "funding" | "news" | "job_change";
                                summary: string;
                                observed_at: string;
                                evidence_url: string | null;
                                title?: string;
                                /** @enum {string} */
                                news_type?: "funding" | "product" | "partnership" | "customers" | "expansion" | "leadership" | "layoffs" | "acquisition" | "challenges" | "recognition" | "other";
                                why_now?: boolean;
                                /** @enum {string} */
                                why_now_basis?: "judged" | "date";
                            }[];
                            window?: {
                                from: string;
                                to: string;
                                within_days?: number;
                            };
                            interpreted?: {
                                roles_searched: string[];
                                version: string;
                            };
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "find_intent";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    companies: number;
                                    candidate_sources: number;
                                    maximum_credits: string;
                                    budget_credits: string | null;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    check_companies: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "question": "Do they let their users book appointments inside their product?",
                 *       "company_domains": [
                 *         "acme.com",
                 *         "example.io"
                 *       ]
                 *     }
                 */
                "application/json": {
                    /** @description One yes/no question about each company's own offering, as a seller would ask it (10–300 characters), e.g. "Do they let their users book appointments inside their product?". Answered only from the company's own website. */
                    question: string;
                    company_domains: string[];
                    /** @description Spend ceiling for this call, in credits. If the most the call can cost is above it, the call is refused before anything is reserved or charged. No company you sent is dropped to fit. It is a ceiling only: it never lets the call use a dearer source. Where spend ceilings aren't available to this key yet, a request that sets it is refused with the reason. */
                    budget_credits?: number;
                    /** @description Return this call's plan instead of running it, as of evaluated_at: the most it can cost, how many sources could answer, what budget_credits changes, and every limit the real call would trip. Nothing is looked up, reserved or charged, and a later call may differ. Where previews aren't available to this key yet, a request that sets it is refused with the reason. */
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            question: string;
                            companies: {
                                company_domain: string;
                                /** @enum {string} */
                                status: "checked" | "unreadable";
                                answer: ("yes" | "not_found" | "unclear") | null;
                                excerpt: string | null;
                                source_url: string | null;
                                pages_read: string[];
                                charged: boolean;
                            }[];
                            answered: number;
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "check_companies";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    companies: number;
                                    candidate_sources: number;
                                    maximum_credits: string;
                                    budget_credits: string | null;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    find_companies: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "hiring": {
                 *         "titles": [
                 *           "GTM Engineer",
                 *           "Sales Development Representative"
                 *         ],
                 *         "posted_within_days": 30
                 *       },
                 *       "country_codes": [
                 *         "US",
                 *         "GB"
                 *       ],
                 *       "company_headcount": {
                 *         "min": 50,
                 *         "max": 500
                 *       },
                 *       "limit": 10
                 *     }
                 */
                "application/json": {
                    audience?: string;
                    query?: string;
                    hiring?: {
                        titles?: string[];
                        description_contains?: string[];
                        /** @default 30 */
                        posted_within_days?: number;
                    };
                    technologies?: string[];
                    include_low_confidence?: boolean;
                    /** @description Company website domain or URL, e.g. acme.com or https://www.acme.com/about */
                    similar_to?: string;
                    /**
                     * @description firmographic: companies by industries (LinkedIn's names, as on find_leads), country_codes, and optionally locations and company_headcount. local: local businesses by categories (for example "dentist") in locations. Leave it out for hiring, technologies, similar_to or query. Where a mode isn't available to this key yet, a request that sets it is refused with the reason.
                     * @enum {string}
                     */
                    mode?: "firmographic" | "local";
                    /** @description Places, only with mode. firmographic: optional cities or regions inside country_codes, matched against each company's headquarters. local: required, each a city with its country, for example "Leeds, United Kingdom" or "Austin, TX". */
                    locations?: string[];
                    /** @description Only with mode local: the kinds of business, for example "dentist" or "commercial cleaning service". */
                    categories?: string[];
                    industries?: string[];
                    /** @description Only with mode firmographic: 1 to 10 phrases, for example "carbon accounting" or "dental practice management". A company matches when its own description, products or specialties mention any of them; with keywords, industries may be left out. Each company then comes back with its description. Where keywords aren't available to this key yet, a request that sets them is refused with the reason. */
                    keywords?: string[];
                    /** @description Only with mode firmographic: up to 10 phrases, for example "recruitment agency" or "consultancy". Companies whose own description mentions any of them are left out. Each company then comes back with its description. Where exclude_keywords aren't available to this key yet, a request that sets them is refused with the reason. */
                    exclude_keywords?: string[];
                    country_codes?: string[];
                    /** @description Employee-count range. With no min or max, companies with fewer than 10 employees are left out. Any bound replaces that default: a max without a min searches from 1 employee. */
                    company_headcount?: {
                        min?: number;
                        max?: number;
                    };
                    /** @default 25 */
                    limit?: number;
                    /**
                     * @description Source preference for this call: balanced (the default), cheapest (the lowest-cost sources), broadest (the sources expected to find the most) or fastest. The price doesn't change with it. Where route choice isn't available to this key yet, only balanced is accepted.
                     * @enum {string}
                     */
                    route?: "balanced" | "cheapest" | "broadest" | "fastest";
                    /** @description Spend ceiling for this call, in credits. If the most the call can cost is above it, limit is lowered to the largest that fits and result.budget_applied says so; the call is refused, before anything is reserved or charged, only when not even one company fits. It is a ceiling only: it never lets the call use a dearer source. Where spend ceilings aren't available to this key yet, a request that sets it is refused with the reason. */
                    budget_credits?: number;
                    /** @description Return this call's plan instead of running it, as of evaluated_at: the most it can cost, how many sources could answer, what budget_credits changes, and every limit the real call would trip. Nothing is looked up, reserved or charged, and a later call may differ. Where previews aren't available to this key yet, a request that sets it is refused with the reason. */
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            match_check?: {
                                /** @enum {string} */
                                status: "checked" | "partial" | "unchecked";
                                kept: number;
                                withheld: number;
                                not_checked: number;
                                unsure?: number;
                                charged?: number;
                            };
                            companies: {
                                company_domain: string;
                                company_name: string | null;
                                description?: string | null;
                                description_source?: ("vendor" | "homepage") | null;
                                linkedin_url?: string | null;
                                headcount?: number | null;
                                industry?: string | null;
                                country?: string | null;
                                city?: string | null;
                                founded_year?: number | null;
                                total_funding_usd?: number | null;
                                jobs_last_30_days?: number | null;
                                last_funding_round_date?: string | null;
                                last_funding_round_amount_usd?: number | null;
                                matched_signals: {
                                    /** @enum {string} */
                                    signal: "hiring" | "technology" | "similar" | "firmographic" | "local";
                                    summary: string;
                                    evidence_url?: string | null;
                                    observed_at: string;
                                    score: number;
                                    /** @enum {string} */
                                    match_confidence?: "high" | "low";
                                }[];
                            }[];
                            company_domains: string[];
                            more_available: boolean | null;
                            low_confidence_companies?: {
                                company_domain: string;
                                company_name: string | null;
                                description?: string | null;
                                description_source?: ("vendor" | "homepage") | null;
                                linkedin_url?: string | null;
                                headcount?: number | null;
                                industry?: string | null;
                                country?: string | null;
                                city?: string | null;
                                founded_year?: number | null;
                                total_funding_usd?: number | null;
                                jobs_last_30_days?: number | null;
                                last_funding_round_date?: string | null;
                                last_funding_round_amount_usd?: number | null;
                                matched_signals: {
                                    /** @enum {string} */
                                    signal: "hiring" | "technology" | "similar" | "firmographic" | "local";
                                    summary: string;
                                    evidence_url?: string | null;
                                    observed_at: string;
                                    score: number;
                                    /** @enum {string} */
                                    match_confidence?: "high" | "low";
                                }[];
                            }[];
                            interpreted?: {
                                query: string;
                                filters: {
                                    hiring?: {
                                        titles?: string[];
                                        description_contains?: string[];
                                    };
                                    technologies?: string[];
                                    industries?: string[];
                                    country_codes?: string[];
                                    company_headcount?: {
                                        min?: number;
                                        max?: number;
                                    };
                                };
                                dropped: {
                                    technologies: string[];
                                    industries?: string[];
                                };
                                caller_filters?: {
                                    fields: ("industries" | "country_codes" | "company_headcount")[];
                                    replaced: {
                                        country_codes?: string[];
                                        company_headcount?: {
                                            min?: number;
                                            max?: number;
                                        };
                                    };
                                };
                                versions: {
                                    prompt: string;
                                    model: string;
                                    interpreter: string;
                                };
                                cached: boolean;
                                industry_reading?: {
                                    phrase: string;
                                    /** @enum {string} */
                                    how: "exact" | "alias" | "none";
                                    industries: string[];
                                    /** @constant */
                                    coarse?: "niche not applied";
                                    candidates?: string[];
                                    applied: boolean;
                                };
                                ran_as?: {
                                    /** @enum {string} */
                                    mode: "firmographic" | "local";
                                    categories?: string[];
                                    locations?: string[];
                                };
                                facets?: {
                                    phrase: string;
                                    /** @enum {string} */
                                    how: "table" | "extractor";
                                    version: string;
                                    sector: string[];
                                    /** @enum {string} */
                                    type: "software" | "technology" | "service_firm" | "manufacturer" | "practice" | "local_service" | "any";
                                    customer: string[];
                                    focus: string[];
                                };
                                route?: {
                                    /** @enum {string} */
                                    kind: "niche" | "broad" | "local";
                                    keywords?: string[];
                                    exclude_keywords?: string[];
                                    /** @enum {string} */
                                    industries_from?: "type" | "caller" | "none";
                                    /** @constant */
                                    type_industries_dropped?: true;
                                };
                            };
                            budget_applied?: {
                                limit_requested: number;
                                limit_used: number;
                            };
                            filtered_out?: {
                                count: number;
                                outside_country: number;
                                over_headcount: number;
                                under_headcount: number;
                            };
                            interpreted_places?: {
                                requested: string;
                                region: string;
                                cities: string[];
                                version: string;
                            }[];
                            interpreted_industries?: {
                                phrase: string;
                                /** @enum {string} */
                                how: "exact" | "alias" | "none";
                                industries: string[];
                                /** @constant */
                                coarse?: "niche not applied";
                                candidates?: string[];
                            }[];
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "find_companies";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    limit: number;
                                    budget_applied: {
                                        limit_requested: number;
                                        limit_used: number;
                                    } | null;
                                    candidate_sources: number;
                                    maximum_credits: string;
                                    budget_credits: string | null;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    enrich_company: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Company website domain or URL, e.g. acme.com or https://www.acme.com/about */
                    company_domain: string;
                    want?: ("profile" | "technologies" | "funding" | "relationships" | "brief")[];
                    /** @enum {string} */
                    depth?: "fast" | "deep";
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            /** @enum {string} */
                            outcome: "hit" | "partial" | "miss";
                            company_domain: string;
                            company: {
                                company_name?: string | null;
                                description?: string | null;
                                headcount?: number | null;
                                industry?: string | null;
                                country?: string | null;
                                founded_year?: number | null;
                                linkedin_url?: string | null;
                                technologies?: {
                                    name: string;
                                    category?: string | null;
                                    observed_at: (string) | null;
                                }[];
                                funding?: {
                                    date: (string) | null;
                                    amount_usd: number | null;
                                    type: string | null;
                                    source_url: string | null;
                                }[];
                                relationships?: {
                                    company_domain: string | null;
                                    company_name: string | null;
                                    /** @enum {string} */
                                    relationship_type: "integration" | "partner" | "customer" | "other";
                                    source_url: string | null;
                                    first_seen_at: (string) | null;
                                }[];
                                brief?: {
                                    summary: string;
                                    products: string[];
                                    target_customers?: string | null;
                                    pricing_notes?: string | null;
                                    hiring_notes?: string | null;
                                    recent_news: {
                                        headline: string;
                                        date: (string) | null;
                                        /** Format: uri */
                                        url: string;
                                    }[];
                                    sources: {
                                        /** Format: uri */
                                        url: string;
                                        title?: string | null;
                                    }[];
                                    observed_at: string;
                                };
                            } | null;
                            dataset_status: {
                                /** @enum {string} */
                                dataset: "profile" | "technologies" | "funding" | "relationships" | "brief";
                                /** @enum {string} */
                                status: "hit" | "empty" | "unavailable";
                                from_cache: boolean;
                                observed_at: (string) | null;
                            }[];
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    find_posts: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    query?: string;
                    author?: {
                        /** @constant */
                        type: "profile_url";
                        /** Format: uri */
                        profile_url: string;
                    } | {
                        /** @constant */
                        type: "handle";
                        /** @enum {string} */
                        platform: "linkedin" | "x" | "reddit" | "youtube" | "tiktok" | "instagram" | "facebook" | "threads" | "hackernews" | "quora";
                        handle: string;
                    } | {
                        /** @constant */
                        type: "person";
                        name: string;
                        /** @description Company website domain or URL, e.g. acme.com or https://www.acme.com/about */
                        company_domain?: string;
                        /** @enum {string} */
                        platform: "linkedin" | "x" | "reddit" | "youtube" | "tiktok" | "instagram" | "facebook" | "threads" | "hackernews" | "quora";
                    };
                    /** @description Company website domain or URL, e.g. acme.com or https://www.acme.com/about */
                    company_domain?: string;
                    /** @enum {string} */
                    intent?: "pain" | "question" | "any" | "competitor_complaint" | "hiring_for_it";
                    audience?: string;
                    platforms?: ("linkedin" | "x" | "reddit" | "youtube" | "tiktok" | "instagram" | "facebook" | "threads" | "hackernews" | "quora")[];
                    /** @default 30 */
                    within_days?: number;
                    /** @default 25 */
                    limit?: number;
                    include?: "author_details"[];
                    /** @description Leads mode: people from find_leads or enrich. Returns each one's best recent reason to reach out (own post, comment, reaction or company post). LinkedIn only: send no query, platforms or intent. */
                    leads?: {
                        fingerprint?: string | null;
                        full_name?: string | null;
                        first_name?: string | null;
                        last_name?: string | null;
                        title?: string | null;
                        company_name?: string | null;
                        company_domain?: string | null;
                        linkedin_url?: string | null;
                        email?: string | null;
                        work_email?: string | null;
                    }[];
                    /** @description Leads mode, or engagers_of with read_all: a spend ceiling in credits. Leads beyond it come back not_processed; read_all reads people up to it. */
                    budget_credits?: number;
                    /** @description Engagers mode: up to 5 post URLs (LinkedIn, X, Reddit, Facebook). Returns the people who reacted, commented, replied or reposted. Send no query, platforms, intent or audience. */
                    engagers_of?: string[];
                    /** @description Engagers mode: up to this many people from each source (reactions, comments, replies) of each post. */
                    per_post?: number;
                    /** @description Engagers mode: keep only people whose headline contains one of these words, e.g. ["head of sales", "VP sales"]. Each person read costs a small scan fee; Reddit and Facebook are skipped (no headlines). */
                    author_filter?: string[];
                    /**
                     * @description Engagers mode: read everyone who engaged, not a sample, in the background (about 2 minutes per 500 people). Needs budget_credits and idempotency_key. Returns an operation: poll get_operation, which returns the people 25 at a time with next_cursor.
                     * @constant
                     */
                    read_all?: true;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            /** @enum {string} */
                            outcome: "hit" | "partial" | "miss";
                            posts: {
                                /** @enum {string} */
                                platform: "linkedin" | "x" | "reddit" | "youtube" | "tiktok" | "instagram" | "facebook" | "threads" | "hackernews" | "quora";
                                post_id: string;
                                /** Format: uri */
                                url: string;
                                text: string;
                                author: {
                                    name: string | null;
                                    handle: string | null;
                                    social_profile_url: string | null;
                                    headline: string | null;
                                    verified: boolean | null;
                                    followers: number | null;
                                    person: {
                                        full_name?: string;
                                        first_name?: string;
                                        last_name?: string;
                                        email?: string;
                                        /** Format: uri */
                                        linkedin_url?: string;
                                        company_name?: string;
                                        company_domain?: string;
                                        title?: string;
                                    };
                                    /** @enum {string} */
                                    type?: "person" | "company";
                                };
                                published_at: (string) | null;
                                engagement: {
                                    likes: number | null;
                                    comments: number | null;
                                    shares: number | null;
                                    views: number | null;
                                };
                                relevance: number;
                                classification?: {
                                    /** @enum {string} */
                                    label: "pain" | "question" | "pitch" | "opinion" | "other";
                                    reason: string;
                                    prompt_version: string;
                                    /** @constant */
                                    status: "classified";
                                    tags?: ("competitor_complaint" | "hiring_for_it")[];
                                };
                                is_repost?: boolean;
                                why_now?: boolean;
                                /** @enum {string} */
                                why_now_basis?: "judged" | "date";
                            }[];
                            platform_status: {
                                /** @enum {string} */
                                platform: "linkedin" | "x" | "reddit" | "youtube" | "tiktok" | "instagram" | "facebook" | "threads" | "hackernews" | "quora";
                                /** @enum {string} */
                                status: "hit" | "miss" | "unavailable" | "timeout" | "unsupported";
                                returned: number;
                                more_available: boolean | null;
                                /** @enum {string} */
                                classification_status?: "classified" | "unavailable" | "not_requested";
                            }[];
                            author_resolutions?: {
                                /** @enum {string} */
                                platform: "linkedin" | "x" | "reddit" | "youtube" | "tiktok" | "instagram" | "facebook" | "threads" | "hackernews" | "quora";
                                /** @enum {string} */
                                status: "resolved" | "ambiguous" | "unresolved" | "unsupported";
                                handle?: string;
                                /** Format: uri */
                                profile_url?: string;
                                confidence?: number;
                                candidates?: {
                                    name: string | null;
                                    handle: string | null;
                                    profile_url: string | null;
                                    confidence: number;
                                }[];
                            }[];
                            /** @constant */
                            relevance_version: "literal-v1";
                            more_available: boolean | null;
                            leads?: {
                                lead: {
                                    key: string;
                                    full_name: string | null;
                                    company_name: string | null;
                                };
                                /** @enum {string} */
                                status: "signal" | "none" | "incomplete" | "not_processed";
                                signal_kind: ("own_post" | "comment" | "reaction" | "company_post") | null;
                                evidence: {
                                    text: string;
                                    /** Format: uri */
                                    url: string;
                                    date: (string) | null;
                                    activity: ("reaction" | "comment") | null;
                                    reaction: string | null;
                                    post_author: string | null;
                                } | null;
                                post_ids: string[];
                                person: {
                                    full_name?: string;
                                    first_name?: string;
                                    last_name?: string;
                                    email?: string;
                                    /** Format: uri */
                                    linkedin_url?: string;
                                    company_name?: string;
                                    company_domain?: string;
                                    title?: string;
                                };
                            }[];
                            engagers?: {
                                /** Format: uri */
                                post_url: string;
                                /** @enum {string} */
                                platform: "linkedin" | "x" | "reddit" | "youtube" | "tiktok" | "instagram" | "facebook" | "threads" | "hackernews" | "quora";
                                /** @enum {string} */
                                status: "hit" | "miss" | "incomplete" | "not_searched";
                                people: {
                                    name: string | null;
                                    /** Format: uri */
                                    profile_url: string;
                                    handle: string | null;
                                    headline: string | null;
                                    /** @enum {string} */
                                    type: "person" | "company";
                                    activities: {
                                        /** @enum {string} */
                                        kind: "reaction" | "comment" | "reply" | "repost";
                                        reaction: string | null;
                                        text: string | null;
                                        at: (string) | null;
                                    }[];
                                    person: {
                                        full_name?: string;
                                        first_name?: string;
                                        last_name?: string;
                                        email?: string;
                                        /** Format: uri */
                                        linkedin_url?: string;
                                        company_name?: string;
                                        company_domain?: string;
                                        title?: string;
                                    };
                                    /** @enum {string} */
                                    matched_by?: "literal" | "judged";
                                }[];
                                filtered_out: number;
                                scanned?: number;
                                read?: number;
                                engaged_total?: number | null;
                                more_available?: boolean | null;
                            }[];
                            /** @enum {string} */
                            filter_basis?: "literal" | "judged";
                            full_read?: {
                                budget_credits: number;
                                eta_seconds: number;
                            };
                            ranking?: {
                                /** @enum {string} */
                                by: "goal" | "recency";
                                judged: number;
                                unsure?: number;
                                version: string;
                                why_now_judged?: number;
                                companies?: string[];
                            };
                            /** @enum {string} */
                            intent?: "pain" | "question" | "any" | "competitor_complaint" | "hiring_for_it";
                            cost_breakdown?: {
                                result_credits: string;
                                classification_credits: string;
                                candidates_classified: number;
                                candidates_withheld: number;
                                classification_versions?: {
                                    classifier: string;
                                    prompt: string;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    setup_sending: {
        parameters: {
            query?: never;
            header?: {
                /** @description Required when confirmation_token is present; reuse it after timeout. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    emails_per_week: number;
                    /** @default true */
                    prefer_prewarmed?: boolean;
                    brand_hint?: string;
                    sender?: {
                        first_name: string;
                        last_name: string;
                    };
                    confirmation_token?: string;
                    /** Format: uri */
                    approval_url?: string;
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            /** @enum {string} */
                            status: "quote" | "purchased";
                            quote: {
                                domains: number;
                                mailboxes: number;
                                setup_credits: string;
                                upkeep_credits_per_month: string;
                                /** @constant */
                                renewal_cadence: "monthly";
                                cancellation_policy: string;
                                /** @enum {string} */
                                ready_estimate: "immediate" | "days" | "weeks";
                                quote_expires_at: string;
                            };
                            card_quote?: {
                                /** @constant */
                                currency: "usd";
                                total_cents: number;
                                domain_one_off_cents: number;
                                mailbox_first_month_cents: number;
                                mailbox_monthly_cents: number;
                                price_version: string;
                                total_display: string;
                            };
                            billing_period?: {
                                start: string;
                                end: string;
                            };
                            confirmation_token?: string;
                            /** Format: uri */
                            approval_url?: string;
                            /** @enum {string} */
                            approval_email?: "queued" | "reused" | "suppressed_rate_limit" | "no_approver";
                            operation_id?: string;
                            domains?: string[];
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "setup_sending";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    domains: number;
                                    mailboxes: number;
                                    setup_credits: string;
                                    upkeep_credits_per_month: string;
                                    /** @constant */
                                    needs_confirmation: true;
                                };
                            };
                        };
                    } | {
                        result: {
                            /** @enum {string} */
                            status: "quote" | "purchased";
                            quote: {
                                domains: number;
                                mailboxes: number;
                                setup_credits: string;
                                upkeep_credits_per_month: string;
                                /** @constant */
                                renewal_cadence: "monthly";
                                cancellation_policy: string;
                                /** @enum {string} */
                                ready_estimate: "immediate" | "days" | "weeks";
                                quote_expires_at: string;
                            };
                            card_quote?: {
                                /** @constant */
                                currency: "usd";
                                total_cents: number;
                                domain_one_off_cents: number;
                                mailbox_first_month_cents: number;
                                mailbox_monthly_cents: number;
                                price_version: string;
                                total_display: string;
                            };
                            billing_period?: {
                                start: string;
                                end: string;
                            };
                            confirmation_token?: string;
                            /** Format: uri */
                            approval_url?: string;
                            /** @enum {string} */
                            approval_email?: "queued" | "reused" | "suppressed_rate_limit" | "no_approver";
                            operation_id?: string;
                            domains?: string[];
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "setup_sending";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    domains: number;
                                    mailboxes: number;
                                    setup_credits: string;
                                    upkeep_credits_per_month: string;
                                    /** @constant */
                                    needs_confirmation: true;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    create_campaign: {
        parameters: {
            query?: never;
            header: {
                /** @description Required; reuse it after timeout. */
                "Idempotency-Key": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    leads: {
                        email: string;
                        first_name?: string;
                        last_name?: string;
                        company_name?: string;
                        location?: string;
                        custom?: {
                            [key: string]: string;
                        };
                    }[];
                    steps: {
                        subject?: string;
                        body: string;
                        /**
                         * @description Days to wait after the previous step before this step is sent. Ignored on the first step, which sends at launch within the sending window.
                         * @default 0
                         */
                        wait_days?: number;
                    }[];
                    sending_window?: {
                        /**
                         * @default Etc/UTC
                         * @enum {string}
                         */
                        timezone?: "Europe/London" | "Europe/Dublin" | "Europe/Paris" | "Europe/Berlin" | "America/New_York" | "America/Denver" | "America/Phoenix" | "America/Toronto" | "Australia/Sydney" | "Asia/Singapore" | "Etc/UTC" | "Etc/GMT+12" | "Etc/GMT+11" | "Etc/GMT+10" | "America/Anchorage" | "America/Dawson" | "America/Creston" | "America/Chihuahua" | "America/Boise" | "America/Belize" | "America/Chicago" | "America/Bahia_Banderas" | "America/Regina" | "America/Bogota" | "America/Detroit" | "America/Indiana/Marengo" | "America/Caracas" | "America/Asuncion" | "America/Glace_Bay" | "America/Campo_Grande" | "America/Anguilla" | "America/Santiago" | "America/St_Johns" | "America/Sao_Paulo" | "America/Argentina/La_Rioja" | "America/Araguaina" | "America/Godthab" | "America/Montevideo" | "America/Bahia" | "America/Noronha" | "America/Scoresbysund" | "Atlantic/Cape_Verde" | "Africa/Casablanca" | "America/Danmarkshavn" | "Europe/Isle_of_Man" | "Atlantic/Canary" | "Africa/Abidjan" | "Arctic/Longyearbyen" | "Europe/Belgrade" | "Africa/Ceuta" | "Europe/Madrid" | "Europe/Sarajevo" | "Africa/Algiers" | "Africa/Windhoek" | "Asia/Nicosia" | "Asia/Beirut" | "Africa/Cairo" | "Asia/Damascus" | "Europe/Bucharest" | "Africa/Blantyre" | "Europe/Helsinki" | "Europe/Istanbul" | "Asia/Jerusalem" | "Africa/Tripoli" | "Asia/Amman" | "Asia/Baghdad" | "Europe/Kaliningrad" | "Asia/Aden" | "Africa/Addis_Ababa" | "Europe/Kirov" | "Europe/Astrakhan" | "Asia/Tehran" | "Asia/Dubai" | "Asia/Baku" | "Indian/Mahe" | "Asia/Tbilisi" | "Asia/Yerevan" | "Asia/Kabul" | "Antarctica/Mawson" | "Asia/Yekaterinburg" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Colombo" | "Asia/Kathmandu" | "Antarctica/Vostok" | "Asia/Dhaka" | "Asia/Rangoon" | "Antarctica/Davis" | "Asia/Novokuznetsk" | "Asia/Hong_Kong" | "Asia/Krasnoyarsk" | "Asia/Brunei" | "Australia/Perth" | "Asia/Taipei" | "Asia/Choibalsan" | "Asia/Irkutsk" | "Asia/Dili" | "Asia/Pyongyang" | "Australia/Adelaide" | "Australia/Darwin" | "Australia/Brisbane" | "Australia/Melbourne" | "Antarctica/DumontDUrville" | "Australia/Currie" | "Asia/Chita" | "Antarctica/Macquarie" | "Asia/Sakhalin" | "Pacific/Auckland" | "Etc/GMT-12" | "Pacific/Fiji" | "Asia/Anadyr" | "Asia/Kamchatka" | "Etc/GMT-13" | "Pacific/Apia";
                        /**
                         * @default [
                         *       "mon",
                         *       "tue",
                         *       "wed",
                         *       "thu",
                         *       "fri"
                         *     ]
                         */
                        days?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[];
                        /** @default 9 */
                        start_hour?: number;
                        /** @default 17 */
                        end_hour?: number;
                    };
                    /**
                     * @default true
                     * @constant
                     */
                    stop_on_reply?: true;
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            history_available?: boolean;
                            campaign_id: string;
                            name: string;
                            /** @enum {string} */
                            state: "draft" | "incomplete" | "launching" | "active" | "paused" | "completed" | "failed";
                            leads_accepted: number;
                            leads_suppressed: number;
                            suppressed_reasons?: {
                                [key: string]: number;
                            };
                            removed?: {
                                opted_out: number;
                                do_not_contact?: number;
                                no_location?: number;
                                excluded?: number;
                                invalid: number;
                                platform_blocked: number;
                                contacted_recently?: number;
                                capped: number;
                                other: number;
                                total: number;
                            };
                            removed_examples?: string[];
                            created_at: string;
                            leads_correlated?: number;
                            leads_pending?: number;
                            leads_rejected?: number;
                            campaign_lead_total?: number;
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "create_campaign";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    /** @constant */
                                    state: "draft";
                                    leads_accepted: number;
                                    leads_suppressed: number;
                                    removed: {
                                        opted_out: number;
                                        do_not_contact?: number;
                                        no_location?: number;
                                        excluded?: number;
                                        invalid: number;
                                        platform_blocked: number;
                                        contacted_recently?: number;
                                        capped: number;
                                        other: number;
                                        total: number;
                                    };
                                    history_available?: boolean;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    add_leads: {
        parameters: {
            query?: never;
            header?: {
                /** @description Required except for an initial active-campaign confirmation preview; reuse it after timeout. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: uuid */
                    campaign_id: string;
                    /** @default [] */
                    leads?: {
                        email: string;
                        first_name?: string;
                        last_name?: string;
                        company_name?: string;
                        location?: string;
                        custom?: {
                            [key: string]: string;
                        };
                    }[];
                    /** @default false */
                    finalize_incomplete?: boolean;
                    confirmation_token?: string;
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            history_available?: boolean;
                            /** Format: uuid */
                            campaign_id: string;
                            /** @enum {string} */
                            state: "draft" | "incomplete" | "active" | "paused";
                            leads_accepted: number;
                            leads_correlated: number;
                            leads_pending: number;
                            leads_rejected: number;
                            leads_suppressed: number;
                            campaign_lead_total: number;
                            removed?: {
                                opted_out: number;
                                do_not_contact?: number;
                                no_location?: number;
                                excluded?: number;
                                invalid: number;
                                platform_blocked: number;
                                contacted_recently?: number;
                                capped: number;
                                other: number;
                                total: number;
                            };
                            removed_examples?: string[];
                            confirmation_token?: string;
                            /** Format: uri */
                            approval_url?: string;
                            /** @enum {string} */
                            approval_email?: "queued" | "reused" | "suppressed_rate_limit" | "no_approver";
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "add_leads";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    campaign_state: string | null;
                                    leads_new: number;
                                    leads_duplicate: number;
                                    leads_suppressed: number;
                                    removed: {
                                        opted_out: number;
                                        do_not_contact?: number;
                                        no_location?: number;
                                        excluded?: number;
                                        invalid: number;
                                        platform_blocked: number;
                                        contacted_recently?: number;
                                        capped: number;
                                        other: number;
                                        total: number;
                                    };
                                    needs_confirmation: boolean;
                                    history_available?: boolean;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    launch_campaign: {
        parameters: {
            query?: never;
            header?: {
                /** @description Required when confirmation_token is present; reuse it after timeout. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: uuid */
                    campaign_id: string;
                    confirmation_token?: string;
                    daily_send_limit?: number;
                    dry_run?: boolean;
                    /**
                     * Format: uuid
                     * @description The confirmation_token of the approval this request replaces. Needed only when that approval was already approved and hasn't started yet; one still waiting for a decision is replaced automatically. Only where Layrcake runs approved actions itself (the result's approval block says execution: server); anywhere else it is refused. A dry run doesn't check it, so it refuses it: send it on the call itself.
                     */
                    supersedes?: string;
                    /**
                     * Format: date-time
                     * @description The earliest the first emails may go out (ISO 8601). They start at the first sending-window opening at least 60 minutes after a person approves, and not before this time. It can't be later than the approval's lifetime after this request (7 days by default); a later time is refused. Only where Layrcake runs approved actions itself (the result's approval block says execution: server); anywhere else it is refused. A dry run doesn't check it, so it refuses it: send it on the call itself.
                     */
                    first_send_not_before?: string;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            expected_start?: {
                                days: number | null;
                                /** @constant */
                                estimated: true;
                                label: string;
                            };
                            /** @enum {string} */
                            status: "needs_confirmation" | "launched";
                            campaign_id: string;
                            confirmation_token?: string;
                            mailboxes_attached?: number;
                            leads_active?: number;
                            leads_suppressed_at_launch?: number;
                            removed?: {
                                opted_out: number;
                                do_not_contact?: number;
                                no_location?: number;
                                excluded?: number;
                                invalid: number;
                                platform_blocked: number;
                                contacted_recently?: number;
                                capped: number;
                                other: number;
                                total: number;
                            };
                            daily_send_limit?: number;
                            /** @enum {string} */
                            approval_email?: "queued" | "reused" | "suppressed_rate_limit" | "no_approver";
                            approval?: {
                                /** Format: uuid */
                                id: string;
                                /** @enum {string} */
                                state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                                /** @enum {string} */
                                execution: "server" | "agent_retry";
                                campaign?: {
                                    state: string;
                                    held: boolean;
                                    share: number | null;
                                };
                                state_reason?: ("waiting_for_capacity" | "waiting_for_history") | null;
                                audience_names: string[];
                                expires_at: string;
                                first_send_at: string | null;
                                note: string | null;
                                operation_id: string | null;
                                superseded_by: string | null;
                                instance: number;
                                asked_again_after: {
                                    /** Format: uuid */
                                    id: string;
                                    /** @enum {string} */
                                    state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                                } | null;
                                reused: boolean;
                            };
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "launch_campaign";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    mailboxes_attached: number;
                                    leads_active: number;
                                    leads_suppressed_at_launch: number;
                                    removed: {
                                        opted_out: number;
                                        do_not_contact?: number;
                                        no_location?: number;
                                        excluded?: number;
                                        invalid: number;
                                        platform_blocked: number;
                                        contacted_recently?: number;
                                        capped: number;
                                        other: number;
                                        total: number;
                                    };
                                    daily_send_limit: number;
                                    /** @constant */
                                    needs_confirmation: true;
                                };
                            };
                        };
                    } | {
                        result: {
                            expected_start?: {
                                days: number | null;
                                /** @constant */
                                estimated: true;
                                label: string;
                            };
                            /** @enum {string} */
                            status: "needs_confirmation" | "launched";
                            campaign_id: string;
                            confirmation_token?: string;
                            mailboxes_attached?: number;
                            leads_active?: number;
                            leads_suppressed_at_launch?: number;
                            removed?: {
                                opted_out: number;
                                do_not_contact?: number;
                                no_location?: number;
                                excluded?: number;
                                invalid: number;
                                platform_blocked: number;
                                contacted_recently?: number;
                                capped: number;
                                other: number;
                                total: number;
                            };
                            daily_send_limit?: number;
                            /** @enum {string} */
                            approval_email?: "queued" | "reused" | "suppressed_rate_limit" | "no_approver";
                            approval?: {
                                /** Format: uuid */
                                id: string;
                                /** @enum {string} */
                                state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                                /** @enum {string} */
                                execution: "server" | "agent_retry";
                                campaign?: {
                                    state: string;
                                    held: boolean;
                                    share: number | null;
                                };
                                state_reason?: ("waiting_for_capacity" | "waiting_for_history") | null;
                                audience_names: string[];
                                expires_at: string;
                                first_send_at: string | null;
                                note: string | null;
                                operation_id: string | null;
                                superseded_by: string | null;
                                instance: number;
                                asked_again_after: {
                                    /** Format: uuid */
                                    id: string;
                                    /** @enum {string} */
                                    state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                                } | null;
                                reused: boolean;
                            };
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "launch_campaign";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    mailboxes_attached: number;
                                    leads_active: number;
                                    leads_suppressed_at_launch: number;
                                    removed: {
                                        opted_out: number;
                                        do_not_contact?: number;
                                        no_location?: number;
                                        excluded?: number;
                                        invalid: number;
                                        platform_blocked: number;
                                        contacted_recently?: number;
                                        capped: number;
                                        other: number;
                                        total: number;
                                    };
                                    daily_send_limit: number;
                                    /** @constant */
                                    needs_confirmation: true;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Accepted, in one of two shapes. With `approval`: a person approved it, and Layrcake runs it itself (`approved` until its start, then `in_progress`); calling again with the token only reads this status. With `request_id`: the first call with this Idempotency-Key is still running; read it with get_request. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        status: "approved" | "in_progress";
                        approval: {
                            /** Format: uuid */
                            id: string;
                            /** @enum {string} */
                            state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                            /** @enum {string} */
                            execution: "server" | "agent_retry";
                            campaign?: {
                                state: string;
                                held: boolean;
                                share: number | null;
                            };
                            state_reason?: ("waiting_for_capacity" | "waiting_for_history") | null;
                            audience_names: string[];
                            expires_at: string;
                            first_send_at: string | null;
                            note: string | null;
                            operation_id: string | null;
                            superseded_by: string | null;
                            instance: number;
                            asked_again_after: {
                                /** Format: uuid */
                                id: string;
                                /** @enum {string} */
                                state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                            } | null;
                            reused: boolean;
                        };
                    } | {
                        request_id: string;
                        /** @constant */
                        status: "in_progress";
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    get_replies: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    campaign_id?: string;
                    since?: string;
                    /** @default 50 */
                    limit?: number;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            replies: {
                                /** @enum {string} */
                                intent_status?: "pending" | "unavailable" | "classified";
                                /** @enum {string} */
                                interpreted_intent?: "interested" | "question" | "not_interested" | "not_now" | "referral" | "out_of_office" | "stop" | "bounce" | "other";
                                reply_id: string;
                                campaign_id: string | null;
                                from_email: string;
                                subject: string | null;
                                snippet: string;
                                classification: ("interested" | "not_interested" | "out_of_office" | "unsubscribe" | "bounce" | "other") | null;
                                received_at: string;
                            }[];
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    get_reply: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: uuid */
                    reply_id: string;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            /** @enum {string} */
                            intent_status?: "pending" | "unavailable" | "classified";
                            /** @enum {string} */
                            interpreted_intent?: "interested" | "question" | "not_interested" | "not_now" | "referral" | "out_of_office" | "stop" | "bounce" | "other";
                            reply_id: string;
                            campaign_id: string | null;
                            from_email: string;
                            subject: string | null;
                            snippet: string;
                            classification: ("interested" | "not_interested" | "out_of_office" | "unsubscribe" | "bounce" | "other") | null;
                            received_at: string;
                            thread_id: string | null;
                            to_email: string | null;
                            body_text: string | null;
                            body_html: string | null;
                            /** @enum {string} */
                            body_status: "available" | "unavailable" | "temporarily_unavailable";
                            body_truncated: boolean;
                            /** @constant */
                            content_trust: "external_untrusted";
                            lead: {
                                campaign_lead_id: string;
                                state: string;
                                interest_status: string | null;
                                provider_sync_status: string | null;
                            } | null;
                            our_replies: {
                                sent_reply_id: string;
                                state: string;
                                sent_at: string | null;
                            }[];
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    set_lead_status: {
        parameters: {
            query?: never;
            header: {
                /** @description Optional stable retry key. */
                "Idempotency-Key": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: uuid */
                    campaign_lead_id: string;
                    /** @enum {string} */
                    status: "interested" | "meeting_booked" | "won" | "not_interested" | "out_of_office" | "neutral";
                    proof?: string;
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            campaign_lead_id: string;
                            previous_status: ("interested" | "meeting_booked" | "won" | "not_interested" | "out_of_office" | "neutral") | null;
                            /** @enum {string} */
                            status: "interested" | "meeting_booked" | "won" | "not_interested" | "out_of_office" | "neutral";
                            suppression_applied: boolean;
                            /** @enum {string} */
                            provider_sync_status: "pending" | "synced" | "failed" | "unsupported";
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "set_lead_status";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    previous_status: string | null;
                                    status: string;
                                    changed: boolean;
                                    suppression_applied: boolean;
                                    sync_queued: boolean;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    reply_to_thread: {
        parameters: {
            query?: never;
            header?: {
                /** @description Required when confirmation_token is present; reuse it after timeout. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: uuid */
                    reply_id: string;
                    body_text: string;
                    confirmation_token?: string;
                    dry_run?: boolean;
                    /**
                     * Format: uuid
                     * @description The confirmation_token of the approval this request replaces. Needed only when that approval was already approved and hasn't started yet; one still waiting for a decision is replaced automatically. Only where Layrcake runs approved actions itself (the result's approval block says execution: server); anywhere else it is refused. A dry run doesn't check it, so it refuses it: send it on the call itself.
                     */
                    supersedes?: string;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: ({
                            /** @constant */
                            status: "needs_confirmation";
                            confirmation_token: string;
                            approval_url: string;
                            /** @enum {string} */
                            approval_email?: "queued" | "reused" | "suppressed_rate_limit" | "no_approver";
                            preview: {
                                reply_id: string;
                                to_email: string;
                                from_email: string;
                                subject: string;
                                body_text: string;
                            };
                            approval?: {
                                /** Format: uuid */
                                id: string;
                                /** @enum {string} */
                                state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                                /** @enum {string} */
                                execution: "server" | "agent_retry";
                                campaign?: {
                                    state: string;
                                    held: boolean;
                                    share: number | null;
                                };
                                state_reason?: ("waiting_for_capacity" | "waiting_for_history") | null;
                                audience_names: string[];
                                expires_at: string;
                                first_send_at: string | null;
                                note: string | null;
                                operation_id: string | null;
                                superseded_by: string | null;
                                instance: number;
                                asked_again_after: {
                                    /** Format: uuid */
                                    id: string;
                                    /** @enum {string} */
                                    state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                                } | null;
                                reused: boolean;
                            };
                        } | {
                            /** @constant */
                            status: "sent";
                            sent_reply_id: string;
                            thread_id: string | null;
                            from_email: string;
                            to_email: string;
                            sent_at: string;
                        }) | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "reply_to_thread";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    sends: boolean;
                                    /** @constant */
                                    needs_confirmation: true;
                                };
                            };
                        };
                    } | {
                        result: ({
                            /** @constant */
                            status: "needs_confirmation";
                            confirmation_token: string;
                            approval_url: string;
                            /** @enum {string} */
                            approval_email?: "queued" | "reused" | "suppressed_rate_limit" | "no_approver";
                            preview: {
                                reply_id: string;
                                to_email: string;
                                from_email: string;
                                subject: string;
                                body_text: string;
                            };
                            approval?: {
                                /** Format: uuid */
                                id: string;
                                /** @enum {string} */
                                state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                                /** @enum {string} */
                                execution: "server" | "agent_retry";
                                campaign?: {
                                    state: string;
                                    held: boolean;
                                    share: number | null;
                                };
                                state_reason?: ("waiting_for_capacity" | "waiting_for_history") | null;
                                audience_names: string[];
                                expires_at: string;
                                first_send_at: string | null;
                                note: string | null;
                                operation_id: string | null;
                                superseded_by: string | null;
                                instance: number;
                                asked_again_after: {
                                    /** Format: uuid */
                                    id: string;
                                    /** @enum {string} */
                                    state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                                } | null;
                                reused: boolean;
                            };
                        } | {
                            /** @constant */
                            status: "sent";
                            sent_reply_id: string;
                            thread_id: string | null;
                            from_email: string;
                            to_email: string;
                            sent_at: string;
                        }) | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "reply_to_thread";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    sends: boolean;
                                    /** @constant */
                                    needs_confirmation: true;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Accepted, in one of two shapes. With `approval`: a person approved it, and Layrcake runs it itself (`approved` until its start, then `in_progress`); calling again with the token only reads this status. With `request_id`: the first call with this Idempotency-Key is still running; read it with get_request. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        status: "approved" | "in_progress";
                        approval: {
                            /** Format: uuid */
                            id: string;
                            /** @enum {string} */
                            state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                            /** @enum {string} */
                            execution: "server" | "agent_retry";
                            campaign?: {
                                state: string;
                                held: boolean;
                                share: number | null;
                            };
                            state_reason?: ("waiting_for_capacity" | "waiting_for_history") | null;
                            audience_names: string[];
                            expires_at: string;
                            first_send_at: string | null;
                            note: string | null;
                            operation_id: string | null;
                            superseded_by: string | null;
                            instance: number;
                            asked_again_after: {
                                /** Format: uuid */
                                id: string;
                                /** @enum {string} */
                                state: "draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed";
                            } | null;
                            reused: boolean;
                        };
                    } | {
                        request_id: string;
                        /** @constant */
                        status: "in_progress";
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    research_company: {
        parameters: {
            query?: never;
            header: {
                /** @description Required; reuse it after timeout. */
                "Idempotency-Key": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "company_domain": "acme.com",
                 *       "depth": "standard"
                 *     }
                 */
                "application/json": {
                    /** @description Company website domain or URL, e.g. acme.com or https://www.acme.com/about */
                    company_domain: string;
                    /** @description Optional goal for ranking facts. Always accepted; when checks are off or unavailable, extraction order and the date rule apply, disclosed by ranking. Charges are unchanged. */
                    audience?: string;
                    /**
                     * @default standard
                     * @enum {string}
                     */
                    depth?: "standard" | "deep";
                    budget_credits?: number;
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            operation_id: string;
                            /** @enum {string} */
                            state: "queued" | "running" | "succeeded" | "partially_succeeded" | "failed" | "unknown";
                            cached: boolean;
                            credits_reserved: string;
                            result?: {
                                next?: {
                                    /** @enum {string} */
                                    reason: "check_funding" | "check_news" | "research_strongest" | "research_deeper" | "find_people" | "find_profile";
                                    text: string;
                                    /** @enum {string} */
                                    verb: "find_intent" | "research_company" | "find_leads" | "enrich";
                                    params: {
                                        [key: string]: unknown;
                                    };
                                    max_credits: string;
                                }[];
                                /** @enum {string} */
                                outcome: "hit" | "miss" | "partial";
                                company_domain: string;
                                /** @enum {string} */
                                depth: "standard" | "deep";
                                company_name: string | null;
                                aliases: string[];
                                claims: {
                                    /** @enum {string} */
                                    kind: "funding" | "hiring" | "product" | "partnership" | "leadership" | "customers" | "expansion" | "news" | "identity" | "other";
                                    text: string;
                                    /** Format: uri */
                                    source_url: string;
                                    excerpt: string;
                                    published_at: string | null;
                                    observed_at: string;
                                    confidence: number;
                                    source_content_hash: string;
                                    extraction_version: string;
                                    /** @constant */
                                    entailment: "supported";
                                }[];
                                ranking?: {
                                    /** @enum {string} */
                                    by: "goal" | "recency";
                                    judged: number;
                                    unsure?: number;
                                    version: string;
                                    why_now_judged?: number;
                                    companies?: string[];
                                };
                                why_now: {
                                    /** @enum {string} */
                                    kind: "funding" | "hiring" | "product" | "partnership" | "leadership" | "customers" | "expansion" | "news" | "identity" | "other";
                                    text: string;
                                    /** Format: uri */
                                    source_url: string;
                                    excerpt: string;
                                    published_at: string | null;
                                    observed_at: string;
                                    confidence: number;
                                    source_content_hash: string;
                                    extraction_version: string;
                                    /** @constant */
                                    entailment: "supported";
                                }[];
                                sources: {
                                    /** Format: uri */
                                    url: string;
                                    title: string | null;
                                    published_at: string | null;
                                    /** @enum {string} */
                                    origin: "news_search" | "identity_search" | "company_page";
                                    used: boolean;
                                }[];
                                skipped: {
                                    component: string;
                                    reason: string;
                                }[];
                                cost_breakdown: {
                                    research_credits: string;
                                    page_credits: string;
                                    pages_read: number;
                                    total_credits: string;
                                    maximum_credits: string;
                                };
                                research_version: string;
                                observed_at: string;
                            };
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "research_company";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    /** @enum {string} */
                                    depth: "standard" | "deep";
                                    /** @enum {string} */
                                    cache: "fresh" | "miss";
                                    searches: number;
                                    pages_max: number;
                                    maximum_credits: string;
                                    budget_credits: string | null;
                                    skipped: {
                                        component: string;
                                        reason: string;
                                    }[];
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    prospect_picture: {
        parameters: {
            query?: never;
            header: {
                /** @description Required; reuse it after timeout. */
                "Idempotency-Key": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "person": {
                 *         "full_name": "Jane Doe",
                 *         "company_domain": "acme.com"
                 *       },
                 *       "depth": "standard"
                 *     }
                 */
                "application/json": {
                    audience?: string;
                    person?: {
                        full_name?: string;
                        first_name?: string;
                        last_name?: string;
                        email?: string;
                        /** Format: uri */
                        linkedin_url?: string;
                        company_name?: string;
                        /** @description Company website domain or URL, e.g. acme.com or https://www.acme.com/about */
                        company_domain?: string;
                        title?: string;
                    };
                    /** @description Company website domain or URL, e.g. acme.com or https://www.acme.com/about */
                    company_domain?: string;
                    /**
                     * @default standard
                     * @enum {string}
                     */
                    depth?: "quick" | "standard" | "deep";
                    budget_credits?: number;
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            operation_id: string;
                            /** @enum {string} */
                            state: "queued" | "running" | "succeeded" | "partially_succeeded" | "failed" | "unknown";
                            credits_reserved: string;
                            components: {
                                /** @enum {string} */
                                component: "identity" | "company" | "intent" | "social" | "research" | "network";
                                /** @enum {string} */
                                state: "pending" | "running" | "succeeded" | "failed" | "skipped" | "unknown";
                                reason: string | null;
                                max_credits: string;
                            }[];
                            result?: {
                                /** @enum {string} */
                                outcome: "hit" | "partial" | "miss";
                                /** @enum {string} */
                                depth: "quick" | "standard" | "deep";
                                subject: {
                                    company_domain: string | null;
                                    person_provided: boolean;
                                };
                                datapoints: ({
                                    /** @constant */
                                    kind: "contact";
                                    /** @constant */
                                    component: "identity";
                                    observed_at: string | null;
                                    data: {
                                        fingerprint: string;
                                        full_name: string | null;
                                        title: string | null;
                                        company_name: string | null;
                                        company_domain: string | null;
                                        work_email: string | null;
                                        work_email_status: ("valid" | "catch_all" | "unknown" | "not_found") | null;
                                        email_verdict?: ("valid" | "invalid" | "catch_all_valid" | "catch_all_unknown" | "unknown" | "risky") | null;
                                        mobile_phone: string | null;
                                        linkedin_url: string | null;
                                        location: string | null;
                                        observed_at: string | null;
                                    };
                                } | {
                                    /** @constant */
                                    kind: "company";
                                    /** @constant */
                                    component: "company";
                                    observed_at: string | null;
                                    data: {
                                        company_name?: string | null;
                                        description?: string | null;
                                        headcount?: number | null;
                                        industry?: string | null;
                                        country?: string | null;
                                        founded_year?: number | null;
                                        linkedin_url?: string | null;
                                        technologies?: {
                                            name: string;
                                            category?: string | null;
                                            observed_at: (string) | null;
                                        }[];
                                        funding?: {
                                            date: (string) | null;
                                            amount_usd: number | null;
                                            type: string | null;
                                            source_url: string | null;
                                        }[];
                                        relationships?: {
                                            company_domain: string | null;
                                            company_name: string | null;
                                            /** @enum {string} */
                                            relationship_type: "integration" | "partner" | "customer" | "other";
                                            source_url: string | null;
                                            first_seen_at: (string) | null;
                                        }[];
                                        brief?: {
                                            summary: string;
                                            products: string[];
                                            target_customers?: string | null;
                                            pricing_notes?: string | null;
                                            hiring_notes?: string | null;
                                            recent_news: {
                                                headline: string;
                                                date: (string) | null;
                                                /** Format: uri */
                                                url: string;
                                            }[];
                                            sources: {
                                                /** Format: uri */
                                                url: string;
                                                title?: string | null;
                                            }[];
                                            observed_at: string;
                                        };
                                    };
                                } | {
                                    /** @constant */
                                    kind: "intent_signal";
                                    /** @constant */
                                    component: "intent";
                                    observed_at: string | null;
                                    data: {
                                        company_domain: string;
                                        /** @enum {string} */
                                        signal: "hiring" | "technology" | "funding" | "news" | "job_change";
                                        summary: string;
                                        observed_at: string;
                                        evidence_url: string | null;
                                        title?: string;
                                        /** @enum {string} */
                                        news_type?: "funding" | "product" | "partnership" | "customers" | "expansion" | "leadership" | "layoffs" | "acquisition" | "challenges" | "recognition" | "other";
                                        why_now?: boolean;
                                        /** @enum {string} */
                                        why_now_basis?: "judged" | "date";
                                    };
                                } | {
                                    /** @constant */
                                    kind: "social_post";
                                    /** @constant */
                                    component: "social";
                                    observed_at: string | null;
                                    data: {
                                        /** @enum {string} */
                                        platform: "linkedin" | "x" | "reddit" | "youtube" | "tiktok" | "instagram" | "facebook" | "threads" | "hackernews" | "quora";
                                        post_id: string;
                                        /** Format: uri */
                                        url: string;
                                        text: string;
                                        author: {
                                            name: string | null;
                                            handle: string | null;
                                            social_profile_url: string | null;
                                            headline: string | null;
                                            verified: boolean | null;
                                            followers: number | null;
                                            person: {
                                                full_name?: string;
                                                first_name?: string;
                                                last_name?: string;
                                                email?: string;
                                                /** Format: uri */
                                                linkedin_url?: string;
                                                company_name?: string;
                                                company_domain?: string;
                                                title?: string;
                                            };
                                            /** @enum {string} */
                                            type?: "person" | "company";
                                        };
                                        published_at: (string) | null;
                                        engagement: {
                                            likes: number | null;
                                            comments: number | null;
                                            shares: number | null;
                                            views: number | null;
                                        };
                                        relevance: number;
                                        classification?: {
                                            /** @enum {string} */
                                            label: "pain" | "question" | "pitch" | "opinion" | "other";
                                            reason: string;
                                            prompt_version: string;
                                            /** @constant */
                                            status: "classified";
                                            tags?: ("competitor_complaint" | "hiring_for_it")[];
                                        };
                                        is_repost?: boolean;
                                        why_now?: boolean;
                                        /** @enum {string} */
                                        why_now_basis?: "judged" | "date";
                                    };
                                } | {
                                    /** @constant */
                                    kind: "network_outcomes";
                                    /** @constant */
                                    component: "network";
                                    observed_at: string | null;
                                    data: {
                                        window_days: number;
                                        replies: number;
                                        bounces: number;
                                        stops: number;
                                        complaints: number;
                                        recipients: number;
                                        computed_at: string;
                                    };
                                })[];
                                claims: {
                                    /** @enum {string} */
                                    kind: "funding" | "hiring" | "product" | "partnership" | "leadership" | "customers" | "expansion" | "news" | "identity" | "other";
                                    text: string;
                                    /** Format: uri */
                                    source_url: string;
                                    excerpt: string;
                                    published_at: string | null;
                                    observed_at: string;
                                    confidence: number;
                                    source_content_hash: string;
                                    extraction_version: string;
                                    /** @constant */
                                    entailment: "supported";
                                }[];
                                facts?: {
                                    /** @enum {string} */
                                    kind: "funding_round" | "product_launch" | "partnership" | "customer_win" | "expansion" | "news_coverage";
                                    text: string;
                                    /** Format: uri */
                                    source_url: string;
                                    published_at: string | null;
                                    observed_at: string;
                                }[];
                                why_now: {
                                    /** @enum {string} */
                                    kind: "intent_signal" | "research_claim" | "social_post" | "pooled_fact";
                                    text: string;
                                    observed_at: string;
                                    source_url: string | null;
                                }[];
                                ranking?: {
                                    /** @enum {string} */
                                    by: "goal" | "recency";
                                    judged: number;
                                    unsure?: number;
                                    version: string;
                                    why_now_judged?: number;
                                    companies?: string[];
                                };
                                components: {
                                    /** @enum {string} */
                                    component: "identity" | "company" | "intent" | "social" | "research" | "network";
                                    /** @enum {string} */
                                    status: "hit" | "miss" | "skipped" | "failed" | "unknown";
                                    reason: string | null;
                                    credits: string;
                                    max_credits: string;
                                    from_cache: boolean;
                                    from_pool: boolean;
                                }[];
                                cost_breakdown: {
                                    component_credits: string;
                                    assembly_credits: string;
                                    total_credits: string;
                                    maximum_credits: string;
                                    budget_credits: string | null;
                                };
                                picture_version: string;
                                observed_at: string;
                            };
                        } | {
                            /** @constant */
                            dry_run: true;
                            /** @constant */
                            advisory: true;
                            evaluated_at: string;
                            plan: {
                                /** @constant */
                                verb: "prospect_picture";
                                /** @constant */
                                plan_version: 3;
                                input_version: string;
                                credits_estimate: string;
                                would_exceed: string[];
                                warnings: string[];
                                would: {
                                    /** @enum {string} */
                                    depth: "quick" | "standard" | "deep";
                                    components: {
                                        /** @enum {string} */
                                        component: "identity" | "company" | "intent" | "social" | "research" | "network";
                                        planned: boolean;
                                        reason: string | null;
                                        max_credits: string;
                                        /** @enum {string} */
                                        cache: "fresh" | "miss" | "n/a";
                                    }[];
                                    assembly_credits: string;
                                    maximum_credits: string;
                                    budget_credits: string | null;
                                };
                            };
                        };
                        layrcake: {
                            /** Format: uuid */
                            request_id: string;
                            credits_charged: string;
                            credits_available: string;
                            replayed?: boolean;
                            route?: {
                                /** @enum {string} */
                                used: "balanced" | "cheapest" | "broadest" | "fastest";
                                /** @enum {string} */
                                source: "request" | "key" | "guess" | "default";
                            };
                        };
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    llm: {
        parameters: {
            query?: never;
            header?: {
                /** @description Optional stable retry key. */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    model: string;
                    messages: ({
                        /** @enum {string} */
                        role: "system" | "user" | "assistant" | "tool";
                        content: unknown;
                    } & {
                        [key: string]: unknown;
                    })[];
                    max_tokens?: number;
                    stream?: boolean;
                    temperature?: number;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful outcome */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Caller, scope, confirmation, or credit error */
            "4XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Provider or service error */
            "5XX": {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    get_me: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Key identity, workspace, Guard limits and remaining capacity */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        key: {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            display_prefix: string;
                            created_at: string;
                            scopes: string[];
                            oauth_issued: boolean;
                        };
                        workspace: {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            risk_tier: string;
                            external_actions_suspended: boolean;
                        };
                        limits?: {
                            daily: {
                                cap: number;
                                ceiling: number;
                                capacity: number;
                                lower_cap: number | null;
                                allocated: number;
                                available: number;
                                extras_today: number;
                                applying: boolean;
                                /** @enum {string} */
                                state?: "applying" | "applied" | "failed";
                            };
                            spend?: {
                                /** @enum {string} */
                                mode?: "off" | "shadow" | "enforce";
                                cap_usd: string | null;
                                spent_usd: string;
                                inflight_usd?: string;
                                left_usd: string | null;
                                left_credits: string | null;
                                /** @enum {string} */
                                state: "ok" | "warning" | "stopped";
                                /** Format: date-time */
                                resets_at: string;
                                parts?: {
                                    data_usd: string;
                                    data_credits: string;
                                    sending_usd: string;
                                    sending_credits: string;
                                    seat_usd: string;
                                    agents_usd: string;
                                    mailboxes_usd: string;
                                    domains_usd: string;
                                    other_usd: string;
                                };
                            };
                            paused: {
                                by: string;
                                /** Format: date-time */
                                at: string;
                                /** @enum {string} */
                                side: "payer" | "client" | "system";
                            } | null;
                            campaigns: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                state: string;
                                share: number | null;
                                extra_today: number;
                                held_by: ("pause_all" | "campaign")[];
                                hold_reasons: ("interrupted" | "no_mailbox" | "removal_failed" | "no_room" | "removal_pending" | "capacity_lost" | "limits_failed" | "resume_failed" | "history_unavailable")[];
                                restarting: boolean;
                                waiting: ("no_room" | "removal_pending" | "history_unavailable") | null;
                                restart_no_location?: number;
                                left_by_stop?: boolean;
                            }[];
                        };
                        guard: {
                            /** @constant */
                            contacted_recently_window_days?: 90;
                            monthly_spend_cap: string | null;
                            spend_month_to_date: string;
                            spend_left: string | null;
                            workspace_daily_send_cap: number;
                            daily_send_ceiling?: number;
                            daily_send_extras_today?: number;
                            daily_limits_applying?: boolean;
                            workspace_spend?: {
                                /** @enum {string} */
                                mode?: "off" | "shadow" | "enforce";
                                cap_usd: string | null;
                                spent_usd: string;
                                inflight_usd?: string;
                                left_usd: string | null;
                                left_credits: string | null;
                                /** @enum {string} */
                                state: "ok" | "warning" | "stopped";
                                /** Format: date-time */
                                resets_at: string;
                                parts?: {
                                    data_usd: string;
                                    data_credits: string;
                                    sending_usd: string;
                                    sending_credits: string;
                                    seat_usd: string;
                                    agents_usd: string;
                                    mailboxes_usd: string;
                                    domains_usd: string;
                                    other_usd: string;
                                };
                            } | null;
                            resume_available?: boolean;
                            launch_recipients_admitted_today: number;
                            launch_recipients_left_today: number;
                            campaign_daily_capacity_allocated: number;
                            campaign_daily_capacity_left: number;
                            reply_daily_cap: number;
                            max_replies_per_day: number | null;
                            replies_reserved_or_sent_today: number;
                            replies_left_today: number;
                            max_recipients_per_action: number | null;
                            max_assets_per_purchase: number | null;
                            /** @constant */
                            autonomous_external_actions: false;
                        };
                        credits?: {
                            available: string;
                            reserved: string;
                        };
                        upkeep?: {
                            /** @enum {string} */
                            state: "free" | "pending" | "active" | "grace" | "suspended" | "ended" | "unknown";
                            paid_through: string | null;
                            grace_until: string | null;
                            rank: number | null;
                            band: string | null;
                        };
                        billing?: {
                            live_agents: number;
                            next_renewal_at: string | null;
                            next_renewal_estimate_cents: number;
                        };
                    };
                };
            };
        };
    };
    get_trail: {
        parameters: {
            query?: {
                campaign_id?: string;
                /** @description Resolved to your own subject; never echoed back except on retained events. */
                email?: string;
                /** @description Repeatable or comma-separated. */
                kind?: ("verify_verdict" | "admitted" | "removed" | "capped" | "provider_correlated" | "queued" | "launch_requested" | "launched" | "launch_failed" | "approval_requested" | "approved" | "declined" | "consumed" | "expired" | "reply" | "bounce" | "stop" | "complaint" | "pause_requested" | "paused" | "resume_requested" | "resumed" | "spend_threshold_crossed" | "dnc_added" | "dnc_loosened" | "dnc_loosen_cancelled" | "reply_sent" | "reply_failed" | "approval_superseded" | "completed" | "approval_held" | "approval_undone" | "approval_cancelled" | "approval_failed" | "approval_change_requested" | "approval_revised" | "approval_reply_myself" | "tool_action" | "lead_status")[];
                since?: string;
                until?: string;
                /** @description Opt-in safe approval context; requires the workspace pilot gate. Pages are live keyset reads, not one frozen snapshot. */
                view?: "record";
                limit?: number;
                /** @description Opaque; bound to this workspace and these filters. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Events and the cursor for older ones; record context only with view=record */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            events: ({
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "verify_verdict";
                                detail: {
                                    /** @enum {string} */
                                    status: "valid" | "invalid" | "catch_all_valid" | "catch_all_unknown" | "unknown" | "risky";
                                    catch_all: boolean;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "admitted";
                                detail: Record<string, never>;
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "removed";
                                detail: {
                                    /** @enum {string} */
                                    reason: "platform_blocked" | "opted_out" | "do_not_contact" | "invalid" | "contacted_recently" | "capped" | "other";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "capped";
                                detail: {
                                    count: number;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "provider_correlated";
                                detail: {
                                    /** @enum {string} */
                                    source: "bulk_response" | "campaign_reconciliation" | "individual";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "queued";
                                detail: Record<string, never>;
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "launch_requested";
                                detail: {
                                    recipients: number;
                                    mailboxes: number;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "launched";
                                detail: {
                                    recipients: number;
                                    mailboxes: number | null;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "launch_failed";
                                detail: {
                                    reason: ("authentication" | "billing_quota" | "provider_rate_limit" | "local_rate_limit" | "circuit_open" | "invalid_request" | "no_data" | "timeout" | "network" | "upstream_5xx" | "invalid_response" | "unknown") | ("campaign_paused" | "workspace_suspended" | "not_active_after_reconciliation_window");
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_requested";
                                detail: {
                                    action: string;
                                    version?: number;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approved";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via?: "console" | "client_window";
                                    for_client?: boolean;
                                    command_hash?: string;
                                    /** Format: date-time */
                                    first_send_at?: string;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "declined";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via?: "console" | "client_window";
                                    for_client?: boolean;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "consumed";
                                detail: {
                                    action: string;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "expired";
                                detail: {
                                    action: string;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "reply";
                                detail: {
                                    classification: string | null;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "bounce";
                                detail: Record<string, never>;
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "stop";
                                detail: {
                                    /** @enum {string} */
                                    basis?: "stop_net" | "classified";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "complaint";
                                detail: Record<string, never>;
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "pause_requested";
                                detail: {
                                    /** @enum {string} */
                                    reason: "non_payment" | "capacity_lost" | "founder_kill" | "owner_kill" | "admin_suspend" | "campaign_pause" | "resume_failed" | "provider_reported" | "sending_limits" | "add_leads" | "failed_launch_live" | "asset_health" | "launched_paused" | "backfill";
                                    /** @enum {string} */
                                    requested_from?: "client_window";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "paused";
                                detail: {
                                    /** @enum {string} */
                                    reason: "non_payment" | "capacity_lost" | "founder_kill" | "owner_kill" | "admin_suspend" | "campaign_pause" | "resume_failed" | "provider_reported" | "sending_limits" | "add_leads" | "failed_launch_live" | "asset_health" | "launched_paused" | "backfill";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "resume_requested";
                                detail: {
                                    /** @enum {string} */
                                    reason: "pause_all_cleared" | "campaign_resumed";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "resumed";
                                detail: {
                                    /** @enum {string} */
                                    reason: "pause_all_cleared" | "campaign_resumed";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "spend_threshold_crossed";
                                detail: {
                                    /** @enum {number} */
                                    threshold: 80 | 100;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "dnc_added";
                                detail: {
                                    /** @enum {string} */
                                    subject_kind: "email" | "domain" | "area" | "linkedin";
                                    /** @enum {string} */
                                    via: "console" | "client_window" | "api" | "import" | "admin";
                                    permanent: boolean;
                                    has_end: boolean;
                                    count: number;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "dnc_loosened";
                                detail: {
                                    /** @enum {string} */
                                    subject_kind: "email" | "domain" | "area" | "linkedin";
                                    /** @enum {string} */
                                    kind: "lift" | "remove";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "dnc_loosen_cancelled";
                                detail: {
                                    /** @enum {string} */
                                    subject_kind: "email" | "domain" | "area" | "linkedin";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "reply_sent";
                                detail: {
                                    /** @constant */
                                    sent_before_list_change?: true;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "reply_failed";
                                detail: {
                                    /** @enum {string} */
                                    reason: "failed_before_provider_accept" | "abandoned_before_send";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_superseded";
                                detail: {
                                    action: string;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "completed";
                                detail: Record<string, never>;
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_held";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_undone";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_cancelled";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    reason: "workspace_paused" | "key_revoked" | "handover" | "integrity" | "erased" | "recipient_on_list";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_failed";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    reason: "missed_start" | "scope_removed" | "sending_unavailable" | "billing_frozen" | "insufficient_credits" | "capacity" | "price_increased" | "campaign_not_draft" | "reply_already_sent" | "recipients_changed" | "recipients_suppressed" | "recipients_contacted" | "sender_changed" | "words_changed" | "thread_changed" | "tool_unavailable";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_change_requested";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_revised";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_reply_myself";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "tool_action";
                                detail: {
                                    /** @enum {string} */
                                    tool: "slack" | "heyreach" | "webhook";
                                    action: string;
                                    /** @enum {string} */
                                    action_class: "contacts_person" | "spends" | "changes_records" | "reads";
                                    /** @enum {string} */
                                    result: "done" | "refused" | "failed";
                                    /** @enum {string} */
                                    reason?: "do_not_contact" | "invalid_email" | "approval_invalid" | "cap_reached" | "suspended" | "budget" | "key_invalid" | "vendor_error" | "needs_person" | "contacted_recently";
                                };
                            } | {
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "lead_status";
                                detail: {
                                    /** @enum {string} */
                                    status: "interested" | "meeting_booked" | "won" | "not_interested" | "out_of_office" | "neutral";
                                    previous: ("interested" | "meeting_booked" | "won" | "not_interested" | "out_of_office" | "neutral") | null;
                                    proof: ("link" | "event_id") | null;
                                    flagged: boolean;
                                };
                            })[];
                            next_cursor: string | null;
                            evaluated_at: string;
                        } | {
                            events: ({
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "verify_verdict";
                                detail: {
                                    /** @enum {string} */
                                    status: "valid" | "invalid" | "catch_all_valid" | "catch_all_unknown" | "unknown" | "risky";
                                    catch_all: boolean;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "admitted";
                                detail: Record<string, never>;
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "removed";
                                detail: {
                                    /** @enum {string} */
                                    reason: "platform_blocked" | "opted_out" | "do_not_contact" | "invalid" | "contacted_recently" | "capped" | "other";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "capped";
                                detail: {
                                    count: number;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "provider_correlated";
                                detail: {
                                    /** @enum {string} */
                                    source: "bulk_response" | "campaign_reconciliation" | "individual";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "queued";
                                detail: Record<string, never>;
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "launch_requested";
                                detail: {
                                    recipients: number;
                                    mailboxes: number;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "launched";
                                detail: {
                                    recipients: number;
                                    mailboxes: number | null;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "launch_failed";
                                detail: {
                                    reason: ("authentication" | "billing_quota" | "provider_rate_limit" | "local_rate_limit" | "circuit_open" | "invalid_request" | "no_data" | "timeout" | "network" | "upstream_5xx" | "invalid_response" | "unknown") | ("campaign_paused" | "workspace_suspended" | "not_active_after_reconciliation_window");
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_requested";
                                detail: {
                                    action: string;
                                    version?: number;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approved";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via?: "console" | "client_window";
                                    for_client?: boolean;
                                    command_hash?: string;
                                    /** Format: date-time */
                                    first_send_at?: string;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "declined";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via?: "console" | "client_window";
                                    for_client?: boolean;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "consumed";
                                detail: {
                                    action: string;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "expired";
                                detail: {
                                    action: string;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "reply";
                                detail: {
                                    classification: string | null;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "bounce";
                                detail: Record<string, never>;
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "stop";
                                detail: {
                                    /** @enum {string} */
                                    basis?: "stop_net" | "classified";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "complaint";
                                detail: Record<string, never>;
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "pause_requested";
                                detail: {
                                    /** @enum {string} */
                                    reason: "non_payment" | "capacity_lost" | "founder_kill" | "owner_kill" | "admin_suspend" | "campaign_pause" | "resume_failed" | "provider_reported" | "sending_limits" | "add_leads" | "failed_launch_live" | "asset_health" | "launched_paused" | "backfill";
                                    /** @enum {string} */
                                    requested_from?: "client_window";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "paused";
                                detail: {
                                    /** @enum {string} */
                                    reason: "non_payment" | "capacity_lost" | "founder_kill" | "owner_kill" | "admin_suspend" | "campaign_pause" | "resume_failed" | "provider_reported" | "sending_limits" | "add_leads" | "failed_launch_live" | "asset_health" | "launched_paused" | "backfill";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "resume_requested";
                                detail: {
                                    /** @enum {string} */
                                    reason: "pause_all_cleared" | "campaign_resumed";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "resumed";
                                detail: {
                                    /** @enum {string} */
                                    reason: "pause_all_cleared" | "campaign_resumed";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "spend_threshold_crossed";
                                detail: {
                                    /** @enum {number} */
                                    threshold: 80 | 100;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "dnc_added";
                                detail: {
                                    /** @enum {string} */
                                    subject_kind: "email" | "domain" | "area" | "linkedin";
                                    /** @enum {string} */
                                    via: "console" | "client_window" | "api" | "import" | "admin";
                                    permanent: boolean;
                                    has_end: boolean;
                                    count: number;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "dnc_loosened";
                                detail: {
                                    /** @enum {string} */
                                    subject_kind: "email" | "domain" | "area" | "linkedin";
                                    /** @enum {string} */
                                    kind: "lift" | "remove";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "dnc_loosen_cancelled";
                                detail: {
                                    /** @enum {string} */
                                    subject_kind: "email" | "domain" | "area" | "linkedin";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "reply_sent";
                                detail: {
                                    /** @constant */
                                    sent_before_list_change?: true;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "reply_failed";
                                detail: {
                                    /** @enum {string} */
                                    reason: "failed_before_provider_accept" | "abandoned_before_send";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_superseded";
                                detail: {
                                    action: string;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "completed";
                                detail: Record<string, never>;
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_held";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_undone";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_cancelled";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    reason: "workspace_paused" | "key_revoked" | "handover" | "integrity" | "erased" | "recipient_on_list";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_failed";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    reason: "missed_start" | "scope_removed" | "sending_unavailable" | "billing_frozen" | "insufficient_credits" | "capacity" | "price_increased" | "campaign_not_draft" | "reply_already_sent" | "recipients_changed" | "recipients_suppressed" | "recipients_contacted" | "sender_changed" | "words_changed" | "thread_changed" | "tool_unavailable";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_change_requested";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_revised";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "approval_reply_myself";
                                detail: {
                                    action: string;
                                    /** @enum {string} */
                                    via: "console" | "client_window";
                                    for_client: boolean;
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "tool_action";
                                detail: {
                                    /** @enum {string} */
                                    tool: "slack" | "heyreach" | "webhook";
                                    action: string;
                                    /** @enum {string} */
                                    action_class: "contacts_person" | "spends" | "changes_records" | "reads";
                                    /** @enum {string} */
                                    result: "done" | "refused" | "failed";
                                    /** @enum {string} */
                                    reason?: "do_not_contact" | "invalid_email" | "approval_invalid" | "cap_reached" | "suspended" | "budget" | "key_invalid" | "vendor_error" | "needs_person" | "contacted_recently";
                                };
                            } | {
                                record: {
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    approval_id: string | null;
                                    decision_id: string | null;
                                    decision_revision: number | null;
                                    stage: string;
                                    coverage: {
                                        /** @enum {string} */
                                        status: "recorded" | "partial" | "unavailable";
                                        reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                    };
                                };
                                /** Format: uuid */
                                id: string;
                                observed_at: string;
                                /** @enum {string} */
                                source: "route" | "worker" | "webhook" | "console";
                                campaign_id: string | null;
                                campaign_lead_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                                email?: string;
                                /** @constant */
                                kind: "lead_status";
                                detail: {
                                    /** @enum {string} */
                                    status: "interested" | "meeting_booked" | "won" | "not_interested" | "out_of_office" | "neutral";
                                    previous: ("interested" | "meeting_booked" | "won" | "not_interested" | "out_of_office" | "neutral") | null;
                                    proof: ("link" | "event_id") | null;
                                    flagged: boolean;
                                };
                            })[];
                            approvals: {
                                /** Format: uuid */
                                approval_id: string;
                                command_id: string | null;
                                chain_id: string | null;
                                command_version: number | null;
                                instance_number: number | null;
                                command_hash: string | null;
                                content_digest: string | null;
                                state: ("draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed") | null;
                                campaign_id: string | null;
                                reply_id: string | null;
                                superseded_by_id: string | null;
                                ledger: {
                                    found: number;
                                    left_out: {
                                        /** @enum {string} */
                                        category: "opted_out" | "do_not_contact" | "invalid" | "platform_blocked" | "contacted_recently" | "capped" | "other" | "said_no_since_drafted";
                                        count: number;
                                    }[];
                                    included: number;
                                } | null;
                                decisions: {
                                    /** Format: uuid */
                                    id: string;
                                    revision: number;
                                    /** @enum {string} */
                                    decision: "approve" | "hold" | "decline" | "undo" | "supersede" | "cancel" | "expire" | "request_change" | "revise" | "reply_myself";
                                    command_hash: string;
                                    actor: {
                                        /** @enum {string} */
                                        kind: "person" | "key" | "system";
                                        ref: string | null;
                                        label: string;
                                        /** @constant */
                                        label_basis: "current_retained_label";
                                    };
                                    channel: string | null;
                                    for_client: boolean;
                                    reverses_decision_id: string | null;
                                    decided_at: string;
                                }[];
                                approving_decision_id: string | null;
                                operation_id: string | null;
                                request_id: string | null;
                                approved_first_send_at: string | null;
                                first_send_at: string | null;
                                /** @enum {string} */
                                execution: "not_yet_run" | "not_confirmed" | "recorded_success" | "recorded_failure";
                                settlement_event_ids: string[];
                                settlement_events: {
                                    /** Format: uuid */
                                    id: string;
                                    /** @enum {string} */
                                    kind: "launched" | "launch_failed" | "reply_sent" | "reply_failed";
                                    observed_at: string;
                                    campaign_id: string | null;
                                    reply_id: string | null;
                                    request_id: string | null;
                                    operation_id: string | null;
                                }[];
                                coverage: {
                                    /** @enum {string} */
                                    status: "recorded" | "partial" | "unavailable";
                                    reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                };
                            }[];
                            next_cursor: string | null;
                            evaluated_at: string;
                            /** @constant */
                            pagination: "live_keyset";
                        };
                    };
                };
            };
            /** @description Invalid filter or a cursor that does not belong to this workspace/query */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Key lacks trail:read */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    export_trail_csv: {
        parameters: {
            query?: {
                campaign_id?: string;
                /** @description Resolved to your own subject; never echoed back except on retained events. */
                email?: string;
                /** @description Repeatable or comma-separated. */
                kind?: ("verify_verdict" | "admitted" | "removed" | "capped" | "provider_correlated" | "queued" | "launch_requested" | "launched" | "launch_failed" | "approval_requested" | "approved" | "declined" | "consumed" | "expired" | "reply" | "bounce" | "stop" | "complaint" | "pause_requested" | "paused" | "resume_requested" | "resumed" | "spend_threshold_crossed" | "dnc_added" | "dnc_loosened" | "dnc_loosen_cancelled" | "reply_sent" | "reply_failed" | "approval_superseded" | "completed" | "approval_held" | "approval_undone" | "approval_cancelled" | "approval_failed" | "approval_change_requested" | "approval_revised" | "approval_reply_myself" | "tool_action" | "lead_status")[];
                since?: string;
                until?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Complete buffered attachment */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/csv": string;
                };
            };
            /** @description Invalid filters or export bound/deadline exceeded. Identity changed: HTTP 400 invalid_request; Record identity changed; regenerate the export. Discarded exports have no settled read audit. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Key revoked or expired */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing trail:read or access changed */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Pilot disabled or campaign not in this workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_campaign_proof: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Complete buffered attachment */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        schema_version: 1;
                        /** Format: uuid */
                        workspace_id: string;
                        /** Format: uuid */
                        campaign_id: string;
                        workspace_name: string;
                        campaign_title: string;
                        generated_at: string;
                        snapshot_at: string;
                        /** @constant */
                        scope: "whole_retained_campaign_history";
                        completeness: string;
                        approvals: {
                            /** Format: uuid */
                            approval_id: string;
                            command_id: string | null;
                            chain_id: string | null;
                            command_version: number | null;
                            instance_number: number | null;
                            command_hash: string | null;
                            content_digest: string | null;
                            state: ("draft" | "pending_approval" | "held" | "approved" | "queued" | "executing" | "declined" | "expired" | "superseded" | "cancelled" | "failed" | "completed" | "execution_failed") | null;
                            campaign_id: string | null;
                            reply_id: string | null;
                            superseded_by_id: string | null;
                            ledger: {
                                found: number;
                                left_out: {
                                    /** @enum {string} */
                                    category: "opted_out" | "do_not_contact" | "invalid" | "platform_blocked" | "contacted_recently" | "capped" | "other" | "said_no_since_drafted";
                                    count: number;
                                }[];
                                included: number;
                            } | null;
                            decisions: {
                                /** Format: uuid */
                                id: string;
                                revision: number;
                                /** @enum {string} */
                                decision: "approve" | "hold" | "decline" | "undo" | "supersede" | "cancel" | "expire" | "request_change" | "revise" | "reply_myself";
                                command_hash: string;
                                actor: {
                                    /** @enum {string} */
                                    kind: "person" | "key" | "system";
                                    ref: string | null;
                                    label: string;
                                    /** @constant */
                                    label_basis: "current_retained_label";
                                };
                                channel: string | null;
                                for_client: boolean;
                                reverses_decision_id: string | null;
                                decided_at: string;
                            }[];
                            approving_decision_id: string | null;
                            operation_id: string | null;
                            request_id: string | null;
                            approved_first_send_at: string | null;
                            first_send_at: string | null;
                            /** @enum {string} */
                            execution: "not_yet_run" | "not_confirmed" | "recorded_success" | "recorded_failure";
                            settlement_event_ids: string[];
                            settlement_events: {
                                /** Format: uuid */
                                id: string;
                                /** @enum {string} */
                                kind: "launched" | "launch_failed" | "reply_sent" | "reply_failed";
                                observed_at: string;
                                campaign_id: string | null;
                                reply_id: string | null;
                                request_id: string | null;
                                operation_id: string | null;
                            }[];
                            coverage: {
                                /** @enum {string} */
                                status: "recorded" | "partial" | "unavailable";
                                reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                            };
                        }[];
                        events: {
                            /** Format: uuid */
                            id: string;
                            /** @enum {string} */
                            kind: "verify_verdict" | "admitted" | "removed" | "capped" | "provider_correlated" | "queued" | "launch_requested" | "launched" | "launch_failed" | "approval_requested" | "approved" | "declined" | "consumed" | "expired" | "reply" | "bounce" | "stop" | "complaint" | "pause_requested" | "paused" | "resume_requested" | "resumed" | "spend_threshold_crossed" | "dnc_added" | "dnc_loosened" | "dnc_loosen_cancelled" | "reply_sent" | "reply_failed" | "approval_superseded" | "completed" | "approval_held" | "approval_undone" | "approval_cancelled" | "approval_failed" | "approval_change_requested" | "approval_revised" | "approval_reply_myself" | "tool_action" | "lead_status";
                            observed_at: string;
                            record: {
                                actor: {
                                    /** @enum {string} */
                                    kind: "person" | "key" | "system";
                                    ref: string | null;
                                    label: string;
                                    /** @constant */
                                    label_basis: "current_retained_label";
                                };
                                approval_id: string | null;
                                decision_id: string | null;
                                decision_revision: number | null;
                                stage: string;
                                coverage: {
                                    /** @enum {string} */
                                    status: "recorded" | "partial" | "unavailable";
                                    reasons: ("legacy_approval" | "missing_outcome" | "unmatched_decision" | "missing_settlement" | "inconsistent_settlement" | "inconsistent_hash" | "inconsistent_counts" | "missing_ledger" | "missing_approval" | "missing_execution_link")[];
                                };
                            };
                        }[];
                        limits: string[];
                    };
                };
            };
            /** @description Invalid filters or export bound/deadline exceeded. Identity changed: HTTP 400 invalid_request; Record identity changed; regenerate the export. Discarded exports have no settled read audit. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Key revoked or expired */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing trail:read or access changed */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Pilot disabled or campaign not in this workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    tighten_key_policy: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    scopes?: ("data:read" | "llm" | "campaign:write" | "campaign:launch" | "assets:purchase" | "usage:read" | "reply:send" | "control:manage" | "trail:read")[];
                    monthly_spend_cap?: string | null;
                    /** @constant */
                    autonomous_external_actions?: false;
                    autonomous_action_limits?: {
                        max_recipients_per_action?: number | null;
                        max_assets_per_purchase?: number | null;
                        max_replies_per_day?: number | null;
                        require_run?: boolean | null;
                    };
                    /** @enum {string} */
                    premium_offers?: "ask" | "never";
                    premium_max_credits_per_call?: string;
                    data_route?: ("balanced" | "cheapest" | "broadest" | "fastest") | null;
                };
            };
        };
        responses: {
            /** @description The key's policy after the change */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            policy: {
                                key_id: string;
                                name: string;
                                scopes: ("data:read" | "llm" | "campaign:write" | "campaign:launch" | "assets:purchase" | "usage:read" | "reply:send" | "control:manage" | "trail:read")[];
                                monthly_spend_cap: string | null;
                                /** @constant */
                                autonomous_external_actions: false;
                                autonomous_action_limits: {
                                    max_recipients_per_action: number | null;
                                    max_assets_per_purchase: number | null;
                                    max_replies_per_day: number | null;
                                    /** @constant */
                                    require_run?: true;
                                };
                                oauth_connection_id: string | null;
                                /** @enum {string} */
                                premium_offers?: "ask" | "never";
                                premium_max_credits_per_call?: string;
                                /** @enum {string} */
                                data_route?: "balanced" | "cheapest" | "broadest" | "fastest";
                            };
                            /** @enum {string} */
                            direction: "tighten" | "loosen" | "neutral" | "mixed";
                            changed_fields: string[];
                            replayed: boolean;
                        };
                    };
                };
            };
            /** @description owner_required (loosening), self_modification (own key), missing scope */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
            /** @description Idempotency-Key reused with different parameters */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    import_do_not_contact: {
        parameters: {
            query?: never;
            header?: {
                /** @description Required unless dry_run is true */
                "Idempotency-Key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    emails: string[];
                    note?: string;
                    /** @default false */
                    dry_run?: boolean;
                };
            };
        };
        responses: {
            /** @description Import counts; dry_run counts are advisory and queue nothing */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            import_id: string | null;
                            added: number;
                            already_listed: number;
                            strengthened: number;
                            invalid: number;
                            free_mail_refused: number;
                            queued_for_removal: number;
                            replayed: boolean;
                            dry_run: boolean;
                        };
                    };
                };
            };
            /** @description Invalid request, including domains or more than 5,000 emails */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing campaign:write scope */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Import or list release disabled */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Idempotency-Key reused with different parameters */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Shared key rate limit exceeded */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    kill_sending: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    reason?: string;
                };
            };
        };
        responses: {
            /** @description Suspended; containment state */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        result: {
                            /** @constant */
                            suspended: true;
                            containment: {
                                state: string;
                                campaigns_targeted: number;
                            };
                            replayed: boolean;
                        };
                    };
                };
            };
            /** @description Key lacks control:manage */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: {
                            /** @enum {string} */
                            code: "unauthorized" | "forbidden" | "confirmation_required" | "payment_required" | "insufficient_credits" | "rate_limited" | "idempotency_conflict" | "invalid_request" | "suppressed_recipient" | "not_found" | "operation_unknown_state" | "provider_unavailable" | "contact_history_unavailable" | "internal" | "reply_intent_pending" | "reply_already_sent" | "reply_content_unavailable" | "reply_send_disabled" | "mailbox_unavailable" | "self_modification" | "agent_suspended" | "card_required" | "payment_action_required" | "billing_unknown" | "agent_paused" | "stream_consumed" | "run_budget_exceeded" | "run_unavailable" | "run_required" | "own_key_failed" | "change_request_closed" | "tool_key_invalid" | "tool_unavailable" | "approval_declined" | "approval_expired" | "approval_superseded" | "approval_cancelled" | "approval_changed";
                            message: string;
                            request_id?: string;
                            details?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
    };
    pause_campaign: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Campaign held; containment queued */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Campaign not found or controls disabled */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_operation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Operation status */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
